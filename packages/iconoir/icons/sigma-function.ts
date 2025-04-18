import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSigmaFunctionIcon],svg[iconoir-sigma-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4h16v3M4 20h16v-3M4 20l8-8l-8-8"></svg:path>`,
})
export class IconoirSigmaFunctionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
