import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCakeIcon],svg[picon-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4v1h7V4M1 6v1h7V6M0 8V3l2-2l6 2v5"></svg:path>`,
})
export class PiconCakeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
