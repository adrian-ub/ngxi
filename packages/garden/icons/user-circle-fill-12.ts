import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserCircleFill12Icon],svg[garden-user-circle-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6m0 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m2.3 7H3.7c-.3 0-.4-.3-.3-.5C3.9 7.6 4.9 7 6 7s2.1.6 2.6 1.5c.1.2 0 .5-.3.5"></svg:path>`,
})
export class GardenUserCircleFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
