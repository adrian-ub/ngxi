import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons90sIcon],svg[arcticons-90s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.46 22.207L18.532 11.28c-1.38-.796-3.105.2-3.105 1.793v21.854c0 1.594 1.725 2.59 3.105 1.793L37.46 25.793c1.38-.797 1.38-2.789 0-3.585Z"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class Arcticons90sIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
