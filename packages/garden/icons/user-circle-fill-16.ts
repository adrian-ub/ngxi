import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserCircleFill16Icon],svg[garden-user-circle-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8m0 3c1.4 0 2.5 1.1 2.5 2.5S9.4 8 8 8S5.5 6.9 5.5 5.5S6.6 3 8 3m3.7 9H4.3c-.3 0-.4-.3-.3-.5C4.7 10 6.2 9 8 9s3.3 1 4 2.5c.1.2-.1.5-.3.5"></svg:path>`,
})
export class GardenUserCircleFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
