import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSoybeanMilkMakerIcon],svg[icon-park-soybean-milk-maker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M35 10H40.0644C40.5909 10 41.0272 10.4082 41.0622 10.9335L41.9289 23.9335C41.9674 24.5107 41.5096 25 40.9311 25H32"></svg:path><svg:path stroke="#000" d="M7 5H35L31 31H15L12 10L7 5Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M15 31H31L35 43H11L15 31Z"></svg:path><svg:path stroke="#fff" d="M21 37H25"></svg:path></svg:g>`,
})
export class IconParkSoybeanMilkMakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
