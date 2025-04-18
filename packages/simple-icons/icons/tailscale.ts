import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTailscaleIcon],svg[simple-icons-tailscale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-9 9a3 3 0 1 1-6 0a3 3 0 0 1 6 0m0-9a3 3 0 1 1-6 0a3 3 0 0 1 6 0m6-6a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M3 24a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m18 .5a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0-.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M6 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m9-9a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-3 2.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M6 3a3 3 0 1 1-6 0a3 3 0 0 1 6 0M3 5.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class SimpleIconsTailscaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
