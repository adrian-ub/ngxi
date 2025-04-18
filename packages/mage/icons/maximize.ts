import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMaximizeIcon],svg[mage-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 15.469v3.469a2.313 2.313 0 0 0 2.313 2.312H8.53m12.72-5.781v3.469a2.31 2.31 0 0 1-2.312 2.312h-3.47M2.75 8.531V5.062A2.31 2.31 0 0 1 5.063 2.75H8.53m6.939 0h3.469a2.313 2.313 0 0 1 2.312 2.313V8.53"></svg:path>`,
})
export class MageMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
