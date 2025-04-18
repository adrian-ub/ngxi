import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLabelVariantIcon],svg[mdi-label-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.5 19l4.84-7L3.5 5h11c.67 0 1.22.3 1.63.86L20.5 12l-4.37 6.14c-.41.56-.96.86-1.63.86z"></svg:path>`,
})
export class MdiLabelVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
