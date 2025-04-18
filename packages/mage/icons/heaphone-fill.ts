import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHeaphoneFillIcon],svg[mage-heaphone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.998 11.908v6.6a3.4 3.4 0 1 1-6.79 0v-2.64a3.39 3.39 0 0 1 5.29-2.81v-1.15a8.5 8.5 0 1 0-17 0v1.15a3.33 3.33 0 0 1 1.89-.58a3.39 3.39 0 0 1 3.39 3.39v2.64a3.39 3.39 0 1 1-6.78 0v-6.6a10 10 0 0 1 20 0"></svg:path>`,
})
export class MageHeaphoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
