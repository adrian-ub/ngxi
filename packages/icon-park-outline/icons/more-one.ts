import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMoreOneIcon],svg[icon-park-outline-more-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="12" r="3" fill="currentColor"></svg:circle><svg:circle cx="24" cy="24" r="3" fill="currentColor"></svg:circle><svg:circle cx="24" cy="35" r="3" fill="currentColor"></svg:circle>`,
})
export class IconParkOutlineMoreOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
