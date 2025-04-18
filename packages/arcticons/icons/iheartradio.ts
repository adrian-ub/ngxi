import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIheartradioIcon],svg[arcticons-iheartradio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 40.56V26.523"></svg:path><svg:circle cx="24" cy="20.084" r="3.019" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.402 17.056A10.536 10.536 0 0 0 24 12.976A10.535 10.535 0 1 0 8.645 26.881h-.018l13.978 13.136a2 2 0 0 0 2.739 0l13.848-13.014a10.52 10.52 0 0 0 4.21-9.948"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.322 23.734a7.31 7.31 0 0 0 0-7.3m3.668 9.418a11.55 11.55 0 0 0 0-11.535m-16.312 2.117a7.31 7.31 0 0 0 0 7.3m-3.668-9.417a11.55 11.55 0 0 0 0 11.535"></svg:path>`,
})
export class ArcticonsIheartradioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
