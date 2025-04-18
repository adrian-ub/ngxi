import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNintendoSwitchIcon],svg[icon-park-nintendo-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 18C6 12.3431 6 9.51472 7.75736 7.75736C9.51472 6 12.3431 6 18 6H20V42H18C12.3431 42 9.51472 42 7.75736 40.2426C6 38.4853 6 35.6569 6 30V18Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M42 18C42 12.3431 42 9.51472 40.2426 7.75736C38.4853 6 35.6569 6 30 6H28V42H30C35.6569 42 38.4853 42 40.2426 40.2426C42 38.4853 42 35.6569 42 30V18Z"></svg:path><svg:path stroke="#fff" d="M35 13V15"></svg:path><svg:path stroke="#fff" d="M13 33V35"></svg:path></svg:g>`,
})
export class IconParkNintendoSwitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
