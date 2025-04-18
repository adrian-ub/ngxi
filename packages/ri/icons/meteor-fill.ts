import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMeteorFillIcon],svg[ri-meteor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v12A9 9 0 1 1 7.375 5.278L14 1.453v2.77zm-9 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10"></svg:path>`,
})
export class RiMeteorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
