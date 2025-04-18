import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYoucutvideoeditorIcon],svg[arcticons-youcutvideoeditor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="34.338" cy="13.118" r="7.618" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.338" cy="34.882" r="7.618" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31.835" cy="31.509" r="1.415" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.338" cy="34.882" r=".75" fill="currentColor"></svg:circle><svg:circle cx="36.841" cy="31.4" r="1.415" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.474" cy="36.188" r="1.415" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.338" cy="39.127" r="1.415" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="30.203" cy="36.188" r="1.415" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.456" cy="24" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.747 28.027L12.574 9.853h-6.53L27.482 31.29m-4.026-4.025L12.574 38.147h-6.53L20.191 24m3.265-3.265l4.026-4.026M26.72 24l4.027-4.027"></svg:path>`,
})
export class ArcticonsYoucutvideoeditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
