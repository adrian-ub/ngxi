import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHoldInterfaceIcon],svg[icon-park-hold-interface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 33L26 35C26 35 41 32 43 32C45 32 45 34 43 36C41 38 34 44 28 44C22 44 18 41 14 41C10 41 4 41 4 41"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 29C6 27 10 24 14 24C18 24 27.5 28 29 30C30.5 32 26 35 26 35"></svg:path><svg:rect width="16" height="6" x="26" y="15" fill="#2F88FF" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M26 9L42 9"></svg:path></svg:g>`,
})
export class IconParkHoldInterfaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
