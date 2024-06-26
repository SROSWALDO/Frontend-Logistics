import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 12,
    color: "#333",
    flexDirection: "column",
    alignItems: "center",
  },
  section: {
    marginBottom: 20,
    width: "100%",
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 18,
    marginBottom: 10,
    color: "#555",
    textDecoration: "underline",
  },
  table: {
    width: "100%",
    border: "1px solid #666",
    borderCollapse: "collapse",
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
    borderBottom: "1px solid #666",
  },
  tableRow: {
    borderBottom: "1px solid #666",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  labelCell: {
    padding: 8,
    width: "25%",
    borderRight: "1px solid #666",
    borderBottom: "1px solid #666",
    textAlign: "center",
    fontWeight: "bold",
  },
  valueCell: {
    padding: 8,
    width: "75%",
    borderBottom: "1px solid #666",
    textAlign: "left",
    paddingLeft: 10,
  },
});

const formatDateTime = (dateTimeString) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  return new Date(dateTimeString).toLocaleString("es-ES", options);
};

const RegisterPDF = ({ register }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Register</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Origen</Text>
        <View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>ID</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>{register.id}</Text>
              </View>
              <View style={styles.labelCell}>
                <Text>Origen</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>{register.origen}</Text>
              </View>
              <View style={styles.labelCell}>
                <Text>Fecha y hora</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>{formatDateTime(register.fecha_hora_origen)}</Text>
              </View>
              <View style={styles.labelCell}>
                <Text>CP Origen</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>{register.cp_origen}</Text>
              </View>
              <View style={styles.labelCell}>
                <Text>Direccion Origen</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>{register.direccion_origen}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Destino</Text>
        <View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>Destino</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>{register.destino}</Text>
              </View>
              <View style={styles.labelCell}>
                <Text>Fecha y hora</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>{formatDateTime(register.fecha_hora_destino)}</Text>
              </View>
              <View style={styles.labelCell}>
                <Text>CP Destino</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>{register.cp_destino}</Text>
              </View>
              <View style={styles.labelCell}>
                <Text>Direccion Destino</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>{register.direccion_destino}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subheading}>Detalles de la Unidad</Text>
        <View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.labelCell}>
                <Text>Unidad</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>{register.unidad}</Text>
              </View>
              <View style={styles.labelCell}>
                <Text>Peso</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>{register.peso} kg</Text>
              </View>
              <View style={styles.labelCell}>
                <Text>Dimensiones</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>{register.dimensiones} </Text>
              </View>
              <View style={styles.labelCell}>
                <Text>Hazmat</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>{register.hazmat} </Text>
              </View>
              <View style={styles.labelCell}>
                <Text>Cantidad de Skids</Text>
              </View>
              <View style={styles.valueCell}>
                <Text>{register.cantidad_skids}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default RegisterPDF;
