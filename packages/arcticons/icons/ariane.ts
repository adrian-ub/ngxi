import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArianeIcon],svg[arcticons-ariane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:ellipse cx="24" cy="23.99" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.11" ry="21.48" transform="rotate(-45 24 23.999)"></svg:ellipse>`,
})
export class ArcticonsArianeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
