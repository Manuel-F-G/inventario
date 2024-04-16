import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    //    Font
} from "@react-pdf/renderer"
// import { useEffect } from "react";

// Create styles
// Font.register({
//     family: "Inconsolata",
//     src: "http://fonts.gstatic.com/s/inconsolata/v15/7bMKuoy6Nh0ft0SHnIGMuaCWcynf_cDxXwCLxiixG1c.ttf",
// });

const styles = StyleSheet.create({
    page: { flexDirection: "row" },
    section: { margin: 10, padding: 10, flexGrow: 1 },
    table: { width: "100%", margin: "auto", marginTop: 10 },
    row: {
        flexDirection: "row",
        borderBottom: 1,
        borderBottomColor: "#121212",
        //alignItems: "stretch",
        height: 24,
        borderLeftColor: "#000",
        borderLeft: 1,
        textAlign: "left",
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    cell: {
        flex: 1,
        textAlign: "left",
        //fontFamily: "Inconsolata",
        borderLeftColor: "#000",
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    headerCell: {
        flex: 1,
        backgroundColor: "#dcdcdc",
        fontWeight: "bold",
        /*fontFamily: "Inconsolata",*/
        textAlign: "left",
        justifyContent: "flex-start",
        alignItems: 'center',
    },
});


export const ReporteKardex = ({ data }) => {
    const currentDate = new Date()
    const formatedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`


    const renderTableRow = (rowData, isHeader = false) => {
        return (
            <View style={styles.row} key={rowData.id}>
                <Text style={[styles.cell, isHeader && styles.headerCell]}>
                    {rowData.fecha}
                </Text>
                <Text style={[styles.cell, isHeader && styles.headerCell]}>
                    {rowData.nombres}
                </Text>
                <Text style={[styles.cell, isHeader && styles.headerCell]}>
                    {rowData.descripcion}
                </Text>
                <Text style={[styles.cell, isHeader && styles.headerCell]}>
                    {rowData.detalle}
                </Text>
                <Text style={[styles.cell, isHeader && styles.headerCell]}>
                    {rowData.cantidad}
                </Text>
            </View>
        )
    }


    return (
        <Document title="Reporte Kardex">
            <Page size="A4" /*style={styles.page}*/ orientation="landscape">
                <View style={styles.page}>
                    <View style={styles.section}>
                        <Text
                            style={{ fontSize: 18, marginBottom: 10}}
                        >Movimientos de Kardex</Text>
                        <Text>Fecha y hora de impresión: {formatedDate}</Text>
                        <View style={styles.table}>
                            {renderTableRow(
                                {
                                    id: 0,
                                    fecha: "Fecha",
                                    nombres: "Usuario",
                                    descripcion: "Producto ",
                                    detalle: "Movimiento ",
                                    cantidad: "Cantidad",
                                },
                                true
                            )}
                            {
                                data?.map(movement => renderTableRow(movement))
                            }
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}