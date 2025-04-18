import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSagernetIcon],svg[arcticons-sagernet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 6.838L36.02 35.42l-14.433-4.528l11.827-14.75l-15.731 13.57L5.5 25.407ZM28.573 33.09l-7.154 8.073l.168-10.27"></svg:path>`,
})
export class ArcticonsSagernetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
