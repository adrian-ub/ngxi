import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibWindowsIcon],svg[cib-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 4.599l13-1.796v12.599H0zm14.599-2L32 0v15.197H14.599zM0 16.803h13v12.599L0 27.599zm14.599 0H32V32l-17.197-2.401z"></svg:path>`,
})
export class CibWindowsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
