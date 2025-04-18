import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLearnJavascriptIcon],svg[arcticons-learn-javascript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.599 6.421V41.58L5.5 37.885m37-31.075H27.368v18.915l12.553-1.633l-1.032 14.014l-12.99 3.473"></svg:path>`,
})
export class ArcticonsLearnJavascriptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
