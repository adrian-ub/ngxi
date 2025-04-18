import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenZendeskFill12Icon],svg[garden-zendesk-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zM5.692 4.584L2 9h3.692zm2.462 2.589A1.84 1.84 0 0 0 6.308 9H10c0-1.005-.83-1.827-1.846-1.827M10 3H6.308v4.416zM5.692 3H2c0 1.005.83 1.827 1.846 1.827A1.84 1.84 0 0 0 5.692 3"></svg:path>`,
})
export class GardenZendeskFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
