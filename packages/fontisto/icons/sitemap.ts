import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoSitemapIcon],svg[fontisto-sitemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.636 17.455V10.91H12V6.546h2.182V.001H7.637v6.545h2.182v4.364H2.183v6.545H.001V24h6.545v-6.545H4.364v-4.364h13.091v4.364h-2.182V24h6.545v-6.545z"></svg:path>`,
})
export class FontistoSitemapIcon {
  readonly viewBox = input("0 0 22 24")
  readonly width = input("0.92em")
  readonly height = input("1em")
}
