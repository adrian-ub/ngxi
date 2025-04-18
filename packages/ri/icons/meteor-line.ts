import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMeteorLineIcon],svg[ri-meteor-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v12A9 9 0 1 1 7.375 5.278L14 1.453v2.77zm-2 3.122l-7 3.224v-2.43L8.597 6.881a7 7 0 0 0-3.592 5.845L5 13a7 7 0 0 0 13.996.24L19 13zM12 8a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path>`,
})
export class RiMeteorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
