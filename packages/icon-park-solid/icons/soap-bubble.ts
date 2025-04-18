import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSoapBubbleIcon],svg[icon-park-solid-soap-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSoapBubble0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:ellipse cx="22" cy="30" fill="#fff" stroke="#fff" stroke-linejoin="round" rx="16" ry="14"></svg:ellipse><svg:path stroke="#000" d="M26 24c1.333.167 4 1 5 5"></svg:path><svg:circle cx="8" cy="8" r="4" fill="#fff" stroke="#fff" stroke-linejoin="round"></svg:circle><svg:circle cx="41" cy="13" r="3" fill="#fff" stroke="#fff" stroke-linejoin="round"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSoapBubble0)"></svg:path>`,
})
export class IconParkSolidSoapBubbleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
