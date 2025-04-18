import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPlaystoreIcon],svg[whh-playstore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1023H64q-26 0-45-18.5T0 959V319q0-26 19-45t45-19h128V128L320 0v255h384V0l128 128v127h128q27 0 45.5 19t18.5 45v640q0 27-18.5 45.5T960 1023M320 383v512l448-256zM384 0h256v128H384z"></svg:path>`,
})
export class WhhPlaystoreIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
