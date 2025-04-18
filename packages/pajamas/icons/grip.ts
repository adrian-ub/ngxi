import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasGripIcon],svg[pajamas-grip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0m0 4.75A1.25 1.25 0 1 1 9 8a1.25 1.25 0 0 1 2.5 0m-5.75 6a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.5 0a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m-4.5-4.75a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0-4.75a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" clip-rule="evenodd"></svg:path>`,
})
export class PajamasGripIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
