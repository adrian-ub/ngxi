import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFileTextIcon],svg[zmdi-file-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213 3l128 128v256q0 17-12.5 29.5T299 429H42q-17 0-29.5-12.5T0 387V45q0-17 12.5-29.5T43 3zm43 341v-43H85v43zm0-85v-43H85v43zm-64-107h117L192 35z"></svg:path>`,
})
export class ZmdiFileTextIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
