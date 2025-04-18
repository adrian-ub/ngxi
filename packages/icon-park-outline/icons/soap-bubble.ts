import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSoapBubbleIcon],svg[icon-park-outline-soap-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:ellipse cx="22" cy="30" stroke-linejoin="round" rx="16" ry="14"></svg:ellipse><svg:path d="M26 24c1.333.167 4 1 5 5"></svg:path><svg:circle cx="8" cy="8" r="4" stroke-linejoin="round"></svg:circle><svg:circle cx="41" cy="13" r="3" stroke-linejoin="round"></svg:circle></svg:g>`,
})
export class IconParkOutlineSoapBubbleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
