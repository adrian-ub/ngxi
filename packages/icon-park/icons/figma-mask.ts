import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFigmaMaskIcon],svg[icon-park-figma-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M14 41.3244C19.978 37.8663 24 31.4028 24 24C24 16.5972 19.978 10.1338 14 6.67566C8.02199 10.1338 4 16.5972 4 24C4 31.4028 8.02199 37.8663 14 41.3244Z"></svg:path></svg:g>`,
})
export class IconParkFigmaMaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
