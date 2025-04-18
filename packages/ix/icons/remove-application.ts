import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRemoveApplicationIcon],svg[ix-remove-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M394.667 277.333v21.334H448v42.666h-21.333v128h-128v-128h-21.334v-42.666h53.334v-21.334zm-48 74.667h-21.334v74.667h21.334zM400 352h-21.333v74.667H400z"></svg:path><svg:path fill-rule="nonzero" d="M234.667 64v170.667H64V64zM192 106.667h-85.333V192H192zm42.667 170.666V448H64V277.333zM192 320h-85.333v85.333H192zM448 64v170.667H277.333V64zm-42.667 42.667H320V192h85.333z"></svg:path></svg:g>`,
})
export class IxRemoveApplicationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
