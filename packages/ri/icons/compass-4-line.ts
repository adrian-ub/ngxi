import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCompass4LineIcon],svg[ri-compass-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m3.446-10.032l-5.478 5.478a4 4 0 0 1-1.414-1.414l5.478-5.478a4 4 0 0 1 1.414 1.414"></svg:path>`,
})
export class RiCompass4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
