import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSilenceIcon],svg[arcticons-silence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.65 34.51l7.85 3.29V7.27a1.76 1.76 0 0 0-1.76-1.76H15.13a1.76 1.76 0 0 0-1.76 1.76v6.07"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 10.12v30.21a2.16 2.16 0 0 0 2.15 2.16H32.5a2.16 2.16 0 0 0 2.15-2.16V15.49a2.14 2.14 0 0 0-2.15-2.15H13.18Zm14.5 9.5a4.53 4.53 0 0 1 2.23 8.46l1.06 7.58h-6.44l1-7.57A4.53 4.53 0 0 1 20 19.62"></svg:path>`,
})
export class ArcticonsSilenceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
