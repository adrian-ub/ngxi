import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonInfrastructureClassicIcon],svg[carbon-infrastructure-classic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 26h12v2H18zm0-5h12v2H18zm0-5h12v2H18z"></svg:path><svg:path fill="currentColor" d="M14 25H9.5a7.496 7.496 0 0 1-1.322-14.876A10 10 0 0 1 28 12h-2a7.999 7.999 0 0 0-15.95-.87l-.09.834l-.837.056A5.496 5.496 0 0 0 9.5 23H14Z"></svg:path>`,
})
export class CarbonInfrastructureClassicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
