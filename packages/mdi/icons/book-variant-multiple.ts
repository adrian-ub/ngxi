import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookVariantMultipleIcon],svg[mdi-book-variant-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6m16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 10l-2.5-1.5L15 12V4h5v8Z"></svg:path>`,
})
export class MdiBookVariantMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
