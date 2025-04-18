import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAbbanoaIcon],svg[arcticons-abbanoa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.7 40.187c4.257-.99 9.028-1.227 14.8 0m-37 0c3.601-.442 7.055-1.543 11.1 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.162 39.509L24 7.813l14.955 31.783M21.269 14.069l11.92 25.333"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.54 27.589c18.322-13.692 21.368 12.363 33.96-.777"></svg:path>`,
})
export class ArcticonsAbbanoaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
