import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenZendeskStroke12Icon],svg[garden-zendesk-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.538 3.376V10H0zm0-2.376c0 1.508-1.246 2.741-2.769 2.741S0 2.508 0 1zm.924 9c0-1.508 1.246-2.741 2.769-2.741S12 8.492 12 10zm0-2.376V1H12z"></svg:path>`,
})
export class GardenZendeskStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
