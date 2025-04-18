import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFingernailIcon],svg[icon-park-outline-fingernail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4"></svg:path><svg:path d="m38 9.472l.343 1.056h1.11l-.898.652l.343 1.056l-.898-.652l-.898.652l.343-1.056l-.898-.652h1.11z"></svg:path><svg:rect width="12" height="24" x="18" y="13" stroke-linecap="round" stroke-linejoin="round" rx="6"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 25c-2 0-5 2.118-5 6v9.784M30 25c2 0 5 2.118 5 6v9.5"></svg:path></svg:g>`,
})
export class IconParkOutlineFingernailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
