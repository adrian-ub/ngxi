import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTextSearchVariantIcon],svg[mdi-text-search-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6v2H2V6zm0 5v2H2v-2zm9 5v2H2v-2zm1.31-4.5c.44-.68.69-1.5.69-2.39c0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 16l1.39-1.39zm-3.81.11c-1.38 0-2.5-1.11-2.5-2.5s1.12-2.5 2.5-2.5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class MdiTextSearchVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
