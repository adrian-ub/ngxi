import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesBriefsIcon],svg[icon-park-clothes-briefs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22.1579 37C22.1579 37 21.2572 28.9255 18 25C14.956 21.3315 6 19 6 19L6 14H42L42 19C42 19 33.044 21.3315 30 25C26.7428 28.9254 25.8421 37 25.8421 37H22.1579Z"></svg:path>`,
})
export class IconParkClothesBriefsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
