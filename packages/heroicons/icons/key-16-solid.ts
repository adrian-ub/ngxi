import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsKey16SolidIcon],svg[heroicons-key-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6m-4-2a.75.75 0 0 0 0 1.5a.5.5 0 0 1 .5.5a.75.75 0 0 0 1.5 0a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsKey16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
