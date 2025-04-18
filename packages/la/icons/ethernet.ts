import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laEthernetIcon],svg[la-ethernet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm7 4v3h-3v7h2v-2h2v2h2v-2h2v2h2v-7h-3v-3z"></svg:path>`,
})
export class LaEthernetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
