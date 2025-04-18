import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasInformationIcon],svg[pajamas-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M9 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M7 7a.75.75 0 0 0 0 1.5h.25v2h-1a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-1V7z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasInformationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
