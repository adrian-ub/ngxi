import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCancerIcon],svg[icon-park-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="37" cy="17" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 13C6 13 12 5 22 5C32 5 38 11 38 11"></svg:path><svg:circle cx="11" cy="31" r="6" fill="#2F88FF" transform="rotate(-180 11 31)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 35C42 35 36 43 26 43C16 43 10 37 10 37"></svg:path></svg:g>`,
})
export class IconParkCancerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
