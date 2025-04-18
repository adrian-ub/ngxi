import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsFactoryIcon],svg[bxs-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10V6l-5 4V6l-5 4V4H2v16h20V6zm-8 7H7v-3h2zm5 0h-2v-3h2zm5 0h-2v-3h2z"></svg:path>`,
})
export class BxsFactoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
