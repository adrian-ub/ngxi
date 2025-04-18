import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasUpgradeIcon],svg[pajamas-upgrade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14 6l-1.5-1.5l-3.44-3.44L8 0L6.94 1.06L3.5 4.5L2 6h3v7h6V6zM8 2.121L10.379 4.5H9.5v7h-3v-7h-.879zM5.75 14.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasUpgradeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
