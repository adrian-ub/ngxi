import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMoreIcon],svg[icon-park-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="24" r="3"></svg:circle><svg:circle cx="24" cy="24" r="3"></svg:circle><svg:circle cx="36" cy="24" r="3"></svg:circle>`,
})
export class IconParkMoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
