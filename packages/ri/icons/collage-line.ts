import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCollageLineIcon],svg[ri-collage-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3.107a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1zm-8.811 10.158L5 14.355v4.752h7.218zM19 5.107h-7.219l2.468 14H19zm-9.25 0H5v7.218l5.842-1.03z"></svg:path>`,
})
export class RiCollageLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
