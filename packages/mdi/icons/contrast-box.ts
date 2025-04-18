import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiContrastBoxIcon],svg[mdi-contrast-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15.5h-5V17h5m2 2H5L19 5M5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiContrastBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
