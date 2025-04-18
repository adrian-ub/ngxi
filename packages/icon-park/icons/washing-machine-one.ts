import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWashingMachineOneIcon],svg[icon-park-washing-machine-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="40" x="8" y="4" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M8 12C8 13.1046 8.89543 14 10 14H38C39.1046 14 40 13.1046 40 12V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V12Z"></svg:path><svg:circle cx="14" cy="9" r="2" fill="#fff"></svg:circle><svg:circle cx="20" cy="9" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="29" r="7" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkWashingMachineOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
