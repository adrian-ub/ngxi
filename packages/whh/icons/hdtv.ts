import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHdtvIcon],svg[whh-hdtv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640.585 703v65h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h96v-65q-384-7-384-95V64q0-27 18.5-45.5T64.585 0h896q26 0 45 18.5t19 45.5v544q0 88-384 95m320-639h-896v512h896zm-832 448V128h576z"></svg:path>`,
})
export class WhhHdtvIcon {
  readonly viewBox = input("0 0 1025 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}
