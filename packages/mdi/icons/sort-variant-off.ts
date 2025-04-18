import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSortVariantOffIcon],svg[mdi-sort-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L11.11 13H3v-2h6.11l-3-3H3V6h1.11l-3-3l1.28-1.27l19.72 19.73zM15 11h-.8l.8.8zm6-3V6H9.2l2 2zM3 18h6v-2H3z"></svg:path>`,
})
export class MdiSortVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
