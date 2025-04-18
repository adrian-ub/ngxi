import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkErrorPromptIcon],svg[icon-park-error-prompt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 18L20 30"></svg:path><svg:path d="M20 18L8 30"></svg:path><svg:path d="M34 8C39.0007 12.3609 42 17.9311 42 24C42 30.0689 39.0007 35.6391 34 40"></svg:path><svg:path d="M27 14C30.7505 16.7256 33 20.2069 33 24C33 27.7931 30.7505 31.2744 27 34"></svg:path></svg:g>`,
})
export class IconParkErrorPromptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
