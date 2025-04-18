import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUmbrellaOneIcon],svg[icon-park-umbrella-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24H44Z"></svg:path><svg:path stroke-linecap="round" d="M24 24V38.5536C24 41.5678 26.4858 44.0112 29.5 44.0112C32.5142 44.0112 35 41.5678 35 38.5536"></svg:path></svg:g>`,
})
export class IconParkUmbrellaOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
