import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWatchmakerIcon],svg[arcticons-watchmaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23.831" cy="24" r="13.771" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.831 14.003V24h-9.997m23.458 2.914h3.97v-5.828H37.29m-5.67-8.441L30.441 4.5h-13.22l-1.179 8.145m0 22.71l1.179 8.145h13.22l1.179-8.145"></svg:path>`,
})
export class ArcticonsWatchmakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
