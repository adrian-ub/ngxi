import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laEqualsIcon],svg[la-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12v2h22v-2zm0 6v2h22v-2z"></svg:path>`,
})
export class LaEqualsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
