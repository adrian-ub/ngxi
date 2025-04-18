import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHoldSeedsIcon],svg[icon-park-hold-seeds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 33L26 35C26 35 41 32 43 32C45 32 45 34 43 36C41 38 34 44 28 44C22 44 18 41 14 41C10 41 4 41 4 41"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 29C6 27 10 24 14 24C18 24 27.5 28 29 30C30.5 32 26 35 26 35"></svg:path><svg:circle cx="34" cy="22" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="22" cy="15" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="34" cy="7" r="3" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkHoldSeedsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
