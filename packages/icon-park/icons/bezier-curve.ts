import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBezierCurveIcon],svg[icon-park-bezier-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="8" height="8" x="4" y="30" fill="#2F88FF"></svg:rect><svg:rect width="8" height="8" x="36" y="30" fill="#2F88FF"></svg:rect><svg:rect width="8" height="8" x="20" y="10" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M20 14H4"></svg:path><svg:path stroke-linecap="round" d="M44 14H28"></svg:path><svg:path stroke-linecap="round" d="M8 30.0001C8 22.5447 13.0991 16.2803 20 14.5042"></svg:path><svg:path stroke-linecap="round" d="M28 14.5042C34.9009 16.2803 40 22.5447 40 30.0001"></svg:path></svg:g>`,
})
export class IconParkBezierCurveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
