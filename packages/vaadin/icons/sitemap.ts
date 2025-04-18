import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinSitemapIcon],svg[vaadin-sitemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 12V7.5h-6V4H10V0H6v4h1.5v3.5h-6V12H0v4h4v-4H2.5V8.5h5V12H6v4h4v-4H8.5V8.5h5V12H12v4h4v-4z"></svg:path>`,
})
export class VaadinSitemapIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
