import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmallcaseIcon],svg[arcticons-smallcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.165 4.5l16.882 9.75L26.165 24L9.283 14.25z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.165 24v19.5l16.882-9.75v-19.5m-16.882-4.026l6.97 4.026l-6.97 4.026l-6.97-4.026z"></svg:path><svg:ellipse cx="35.236" cy="29.132" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.301" ry="3.138" transform="rotate(-52.425 35.236 29.132)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.528 24.753l-4.55 5.212l9.1 5.337z"></svg:path>`,
})
export class ArcticonsSmallcaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
