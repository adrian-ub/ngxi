import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNeolifeIcon],svg[arcticons-neolife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="24" cy="14.33" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.988" ry="4.643"></svg:ellipse><svg:ellipse cx="26.971" cy="20.573" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.325" ry="1.512" transform="rotate(-60 26.971 20.573)"></svg:ellipse><svg:ellipse cx="27.115" cy="34.316" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.325" ry="1.512" transform="rotate(-51.817 27.115 34.316)"></svg:ellipse><svg:ellipse cx="27.353" cy="27.471" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.325" ry="1.603" transform="rotate(-51.817 27.353 27.471)"></svg:ellipse><svg:ellipse cx="21.029" cy="20.573" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.512" ry="4.325" transform="rotate(-30 21.028 20.573)"></svg:ellipse><svg:ellipse cx="20.885" cy="34.316" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.512" ry="4.325" transform="rotate(-38.183 20.885 34.316)"></svg:ellipse><svg:ellipse cx="20.647" cy="27.471" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.603" ry="4.325" transform="rotate(-38.187 20.645 27.47)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 18.973V45.5"></svg:path>`,
})
export class ArcticonsNeolifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
