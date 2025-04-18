import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenZendeskStroke16Icon],svg[garden-zendesk-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.385 5.168V14H0zm0-3.168c0 2.01-1.662 3.655-3.693 3.655C1.662 5.655 0 4.01 0 2zm1.23 12c0-2.01 1.662-3.655 3.693-3.655C14.338 10.345 16 11.99 16 14zm0-3.168V2H16z"></svg:path>`,
})
export class GardenZendeskStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
