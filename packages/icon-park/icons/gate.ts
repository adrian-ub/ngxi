import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGateIcon],svg[icon-park-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M13 10V35"></svg:path><svg:path stroke-linejoin="round" d="M35 10V35"></svg:path><svg:path d="M8 18L40 18"></svg:path><svg:path stroke-linejoin="round" d="M24 10V18"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M39 10H9.00001L5 4C5 4 16.0708 5 24 5C31.9292 5 43 4 43 4L39 10Z"></svg:path><svg:rect width="6" height="9" x="10" y="35" fill="#2F88FF" stroke-linejoin="round"></svg:rect><svg:rect width="6" height="9" x="32" y="35" fill="#2F88FF" stroke-linejoin="round"></svg:rect></svg:g>`,
})
export class IconParkGateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
