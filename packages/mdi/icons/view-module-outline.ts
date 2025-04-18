import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewModuleOutlineIcon],svg[mdi-view-module-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v13h17V5zm10 2v3.5h-3V7zM6 7h3v3.5H6zm0 9v-3.5h3V16zm5 0v-3.5h3V16zm8 0h-3v-3.5h3zm-3-5.5V7h3v3.5z"></svg:path>`,
})
export class MdiViewModuleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
