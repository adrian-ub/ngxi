import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsServerStack16SolidIcon],svg[heroicons-server-stack-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.354 2a2 2 0 0 0-1.857 1.257l-.338.845Q3.565 4 4 4h8q.436 0 .84.102l-.337-.845A2 2 0 0 0 10.646 2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 13a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2m10.75 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M9 13.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M4 5.5a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4zm8 2.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M9.75 7.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsServerStack16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
