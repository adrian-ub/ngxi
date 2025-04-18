import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextScaleIcon],svg[carbon-text-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 5v3h-8v18h-3V8h-8V5z"></svg:path><svg:path fill="currentColor" d="M7 26V14H2v-2h12v2H9v12z"></svg:path>`,
})
export class CarbonTextScaleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
