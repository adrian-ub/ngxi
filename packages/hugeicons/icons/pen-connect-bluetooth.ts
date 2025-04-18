import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPenConnectBluetoothIcon],svg[hugeicons-pen-connect-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.356 7.051l2.769 1.91c.582.403.874.603.875.87s-.288.47-.866.876l-.576.405c-.953.67-1.43 1.004-1.816.851c-.386-.152-.386-.675-.386-1.72zm0 0L5.28 7m.075.051V6.95M5.28 7L2 4.736M5.281 7l.075-.051M5.28 7L2 9.264m3.356-2.315l2.769-1.91c.582-.403.874-.603.875-.87s-.288-.47-.866-.876l-.576-.405c-.953-.67-1.43-1.004-1.816-.852s-.386.676-.386 1.721zm11.858 1.033l1.402-1.401a1.982 1.982 0 0 1 2.803 2.803l-1.401 1.402m-2.804-2.804L8.98 16.216c-1.045 1.046-1.568 1.568-1.924 2.205s-.527 1.356-.87 2.794L6 22l.785-.187c1.438-.342 2.157-.514 2.794-.87c.637-.355 1.16-.878 2.205-1.923l8.234-8.234m-2.804-2.804l2.804 2.804" color="currentColor"></svg:path>`,
})
export class HugeiconsPenConnectBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
