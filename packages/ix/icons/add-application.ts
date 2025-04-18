import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAddApplicationIcon],svg[ix-add-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path fill-rule="nonzero" d="M234.667 64v170.667H64V64zM192 106.667h-85.333V192H192zm42.667 170.666V448H64V277.333zM192 320h-85.333v85.333H192zM448 64v170.667H277.333V64zm-42.667 42.667H320V192h85.333z"></svg:path><svg:path d="M341.333 277.333H384V448h-42.667z"></svg:path><svg:path d="M277.333 341.333H448V384H277.333z"></svg:path></svg:g>`,
})
export class IxAddApplicationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
