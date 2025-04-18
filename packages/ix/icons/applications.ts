import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixApplicationsIcon],svg[ix-applications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 64v170.667H64V64zM192 106.667h-85.333V192H192zm42.667 170.666V448H64V277.333zM192 320h-85.333v85.333H192zM448 64v170.667H277.333V64zm-42.667 42.667H320V192h85.333zM448 277.333V448H277.333V277.333zM405.333 320H320v85.333h85.333z"></svg:path>`,
})
export class IxApplicationsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
