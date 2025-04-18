import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenZendesk26Icon],svg[garden-zendesk-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.2v14.5H0zM12 3c0 3.3-2.7 6-6 6S0 6.3 0 3zm2 19.7c0-3.3 2.7-6 6-6s6 2.7 6 6zm0-5.2V3h12z"></svg:path>`,
})
export class GardenZendesk26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
