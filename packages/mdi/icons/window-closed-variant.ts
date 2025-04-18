import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWindowClosedVariantIcon],svg[mdi-window-closed-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20V2H3v18H1v3h22v-3M19 4v7h-6V4M5 4h6v7H5m0 9v-7h6v7m2 0v-7h6v7Z"></svg:path>`,
})
export class MdiWindowClosedVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
