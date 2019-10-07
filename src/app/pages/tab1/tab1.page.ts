import { DatePicker, DatePickerOptions } from '@ionic-native/date-picker';
import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  // tDate: string;

  constructor(
    public actionSheetController: ActionSheetController,
    // public datePicker: DatePicker
  ) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }



  // getDate(){
  //   let options: DatePickerOptions = {
  //     date: new Date(),
  //     mode: 'datetime',
  //     titleText: '请选择日期',
  //     okText: '选择',
  //     cancelText: '取消',
  //     todayText: '今天',
  //     nowText: '现在',
  //     is24Hour: true,
  //     allowOldDates: true,
  //     doneButtonLabel: '确定',
  //     minuteInterval: 10,
  //     androidTheme: this.datePicker.ANDROID_THEMES.THEMES.HOLO_DARK
  //   }
  //   this.datePicker.show(options).then(
  //     date => {
  //       let time = new Date(date.getTime() + 8 * 60 * 60 * 1000).toISOString();
  //       this.tDate = String(time.substring(0, time.length - 5)).replace('T', ' ')
  //       // 格式时间显示样式
  //     },
  //     err => console.log('Error occurred while getting date: ', err)
  //   );
  // }


}
