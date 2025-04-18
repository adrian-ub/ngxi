import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewQuiltOutlineIcon],svg[mdi-view-quilt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v13h17V5zm2 11V7h3v9zm5 0v-3.5h3V16zm8 0h-3v-3.5h3zm-8-5.5V7h8v3.5z"></svg:path>`,
})
export class MdiViewQuiltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
