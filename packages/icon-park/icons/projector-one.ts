import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkProjectorOneIcon],svg[icon-park-projector-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 21V10H10V21"></svg:path><svg:rect width="40" height="16" x="4" y="21" fill="#2F88FF" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:rect width="4" height="4" x="14" y="27" fill="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 29H36"></svg:path></svg:g>`,
})
export class IconParkProjectorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
