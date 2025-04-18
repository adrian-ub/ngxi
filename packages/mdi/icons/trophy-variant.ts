import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrophyVariantIcon],svg[mdi-trophy-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4V2H7v2H2v7c0 1.1.9 2 2 2h3.1a5.01 5.01 0 0 0 3.9 3.9v2.18C8 19.54 8 22 8 22h8s0-2.46-3-2.92V16.9a5.01 5.01 0 0 0 3.9-3.9H20c1.1 0 2-.9 2-2V4zM4 11V6h3v5zm16 0h-3V6h3z"></svg:path>`,
})
export class MdiTrophyVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
