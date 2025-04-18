import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHorseVariantFastIcon],svg[mdi-horse-variant-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8v8l-3 1l-3.09-5.5c-.26-.46-.99-.23-.91.31L17 21L7 17l1.15-8.06A6.92 6.92 0 0 1 15 3h8l-1.58 2.37C22.36 5.88 23 6.86 23 8M4 5h3.58c.5-.76 1.12-1.43 1.83-2H4c-.55 0-1 .45-1 1s.45 1 1 1m1.84 6H2c-.55 0-1 .45-1 1s.45 1 1 1h3.55zM3 9h3.12l.05-.34c.08-.58.22-1.13.41-1.66H3c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class MdiHorseVariantFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
