import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBluetooth24RegularIcon],svg[fluent-bluetooth-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.463 2.057a.75.75 0 0 1 .817.163l5 5a.75.75 0 0 1-.044 1.101L12.908 12l4.328 3.678a.75.75 0 0 1 .044 1.102l-5 5a.75.75 0 0 1-1.28-.53v-7.628l-3.764 3.2a.75.75 0 0 1-.972-1.143L10.592 12L6.264 8.321a.75.75 0 1 1 .972-1.142l3.764 3.2V2.75a.75.75 0 0 1 .463-.693M12.5 13.622v5.817l3.145-3.144zm0-3.244l3.145-2.673L12.5 4.561z"></svg:path>`,
})
export class FluentBluetooth24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
