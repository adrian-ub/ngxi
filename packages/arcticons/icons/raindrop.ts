import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRaindropIcon],svg[arcticons-raindrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.25 19.855a9.75 9.75 0 0 1 9.75 9.75v9.75h0h-9.75a9.75 9.75 0 0 1-9.75-9.75v0a9.75 9.75 0 0 1 9.75-9.75m9.75 19.5h9.75a9.75 9.75 0 0 0 9.75-9.75h0a9.75 9.75 0 0 0-9.75-9.75h0a9.75 9.75 0 0 0-9.75 9.75"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.995 12.371a12.72 12.72 0 0 1 0 17.989L24 39.354h0l-8.994-8.994a12.72 12.72 0 0 1 0-17.989h0a12.72 12.72 0 0 1 17.989 0"></svg:path>`,
})
export class ArcticonsRaindropIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
