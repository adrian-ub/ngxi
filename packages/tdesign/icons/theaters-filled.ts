import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTheatersFilledIcon],svg[tdesign-theaters-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H2V2h20zM20 4h-2.5v2.5H20zm0 4.5h-2.5V11H20zm0 4.5h-2.5v2.5H20zm-2.5 4.5V20H20v-2.5zM6.5 4H4v2.5h2.5zm0 4.5H4V11h2.5zm0 4.5H4v2.5h2.5zm0 4.5H4V20h2.5z"></svg:path>`,
})
export class TdesignTheatersFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
