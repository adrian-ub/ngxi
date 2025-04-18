import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandPrismaIcon],svg[tabler-brand-prisma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4.186 16.202l3.615 5.313c.265.39.754.57 1.215.447l10.166-2.718a1.086 1.086 0 0 0 .713-1.511L12.39 2.25a.448.448 0 0 0-.787-.033L4.15 15.055a1.07 1.07 0 0 0 .037 1.147zM8.5 22L12 2"></svg:path>`,
})
export class TablerBrandPrismaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
