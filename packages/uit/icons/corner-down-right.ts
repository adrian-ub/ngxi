import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitCornerDownRightIcon],svg[uit-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.961 16.309a.5.5 0 0 0-.108-.163l-4.5-4.5a.5.5 0 0 0-.707.708L17.293 16H8.5A2.5 2.5 0 0 1 6 13.5v-10a.5.5 0 0 0-1 0v10A3.504 3.504 0 0 0 8.5 17h8.793l-3.647 3.646a.5.5 0 1 0 .708.708l4.5-4.5a.5.5 0 0 0 .146-.352V16.5a.5.5 0 0 0-.039-.191"></svg:path>`,
})
export class UitCornerDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
