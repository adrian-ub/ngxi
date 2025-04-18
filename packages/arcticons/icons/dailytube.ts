import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDailytubeIcon],svg[arcticons-dailytube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.12 5.5H8.38v37h12.74A18.5 18.5 0 0 0 39.62 24h0a18.5 18.5 0 0 0-18.5-18.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.073 24l-9.355-7.626v15.252zM8.381 5.5l13.337 10.874M8.381 42.5l13.337-10.874M31.073 24l2.56 2.087c2.7 1.964 3.836 7.39.586 10.976"></svg:path>`,
})
export class ArcticonsDailytubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
