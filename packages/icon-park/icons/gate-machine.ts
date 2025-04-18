import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGateMachineIcon],svg[icon-park-gate-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="8" height="6" x="6" y="42" fill="#2F88FF" stroke-linejoin="round" transform="rotate(-90 6 42)"></svg:rect><svg:rect width="8" height="6" x="36" y="42" fill="#2F88FF" stroke-linejoin="round" transform="rotate(-90 36 42)"></svg:rect><svg:path stroke-linejoin="round" d="M24 14V17"></svg:path><svg:path stroke-linejoin="round" d="M24 6V8"></svg:path><svg:path stroke-linejoin="round" d="M24 26V30"></svg:path><svg:path stroke-linejoin="round" d="M9 6V34"></svg:path><svg:path stroke-linejoin="round" d="M39 6V34"></svg:path><svg:path stroke-linejoin="round" d="M24 38V42"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M20 21H9V30L20 21Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M28 21H39V30L28 21Z"></svg:path><svg:path d="M18 15L9 15"></svg:path><svg:path d="M30 15L39 15"></svg:path></svg:g>`,
})
export class IconParkGateMachineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
