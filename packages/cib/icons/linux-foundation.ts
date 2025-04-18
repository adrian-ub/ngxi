import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibLinuxFoundationIcon],svg[cib-linux-foundation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.401 12.802v12.797h12.797V32H0V12.802zM32 0v32h-9.599v-6.401h3.198V6.401H6.401v3.198H0V0z"></svg:path>`,
})
export class CibLinuxFoundationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
