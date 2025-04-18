import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkListSuccessIcon],svg[icon-park-list-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 10H44"></svg:path><svg:path d="M20 24H44"></svg:path><svg:path d="M20 38H44"></svg:path><svg:circle cx="8" cy="24" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="8" cy="38" r="4" fill="#2F88FF"></svg:circle><svg:path d="M4 10L7 13L13 7"></svg:path></svg:g>`,
})
export class IconParkListSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
