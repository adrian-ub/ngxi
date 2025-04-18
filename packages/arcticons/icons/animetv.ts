import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnimetvIcon],svg[arcticons-animetv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.293 39.372A18.5 18.5 0 0 1 24 42.5C13.783 42.5 5.5 34.217 5.5 24S13.783 5.5 24 5.5S42.5 13.783 42.5 24h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.167 30.167H24a6.167 6.167 0 1 1 6.167-6.166zc0 6.812 5.522 12.333 12.333 12.333V24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24c0-6.811 5.522-12.333 12.333-12.333h0c6.811 0 12.333 5.522 12.333 12.333h0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.5c-6.811 0-12.333-5.522-12.333-12.333h0c0-6.811 5.522-12.333 12.333-12.333h0"></svg:path>`,
})
export class ArcticonsAnimetvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
