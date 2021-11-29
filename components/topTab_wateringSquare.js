import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import Appy from '../View/essaysearch'

class BasicTabs extends React.Component {
    render() {
        const tabs = [
            { title: '分享广场' },
            { title: '文献专区' },
        ];


        return (
            <View style={{ flex: 1 }}>
                <Tabs tabs={tabs}
                >
                    <ScrollView >
                        <Appy/>
                    </ScrollView>
                    <ScrollView>
                        <Appy/>
                    </ScrollView>

                </Tabs>

            </View>
        );
    }
}
export default BasicTabs;
export const title = 'Tabs';
export const description = 'Tabs example';






