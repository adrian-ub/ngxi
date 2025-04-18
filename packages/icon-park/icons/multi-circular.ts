import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiCircularIcon],svg[icon-park-multi-circular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path d="M24 44C31.732 44 38 37.732 38 30C38 22.268 31.732 16 24 16C16.268 16 10 22.268 10 30C10 37.732 16.268 44 24 44Z"></svg:path><svg:path fill="#2F88FF" d="M24 44C28.4183 44 32 40.4183 32 36C32 31.5817 28.4183 28 24 28C19.5817 28 16 31.5817 16 36C16 40.4183 19.5817 44 24 44Z"></svg:path></svg:g>`,
})
export class IconParkMultiCircularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
