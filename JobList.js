// JobList.js
import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import jobList from './data';

const JobList = ({ navigation }) => {
    const handleApply = (jobId) => {
        navigation.navigate('ApplyJob', { jobId });
    };

    return (
        <ScrollView style={styles.scrollView}>
            <Text style={styles.header}>Lista de Vagas</Text>
            {jobList.map(job => (
                <View key={job.id} style={styles.jobContainer}>
                    <Text style={styles.jobTitle}>{job.title}</Text>
                    <Text>{job.company} - {job.location}</Text>
                    <Text>{job.description}</Text>
                    <Button title="Enviar Currículo" onPress={() => handleApply(job.id)} />
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    jobContainer: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default JobList;
