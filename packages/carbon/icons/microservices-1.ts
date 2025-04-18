import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMicroservices1Icon],svg[carbon-microservices-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 21l-4-2.2v-4.5l4-2.2l4 2.2v4.5zm-2-3.4l2 1.1l2-1.1v-2.2l-2-1.1l-2 1.1zM6 30l-4-2.2v-4.5L6 21l4 2.2v4.5zm-2-3.4l2 1.1l2-1.1v-2.2l-2-1.1l-2 1.1zM16 30l-4-2.2v-4.5l4-2.2l4 2.2v4.5zm-2-3.4l2 1.1l2-1.1v-2.2l-2-1.1l-2 1.1zM26 30l-4-2.2v-4.5l4-2.2l4 2.2v4.5zm-2-3.4l2 1.1l2-1.1v-2.2l-2-1.1l-2 1.1zm.6-15L22 14.2V9.4l3-1.7V3.2L21 1l-4 2.2v4.5l3 1.7v4.7l-2.6-2.6L16 13l5 5l5-5zM19 4.4l2-1.1l2 1.1v2.2l-2 1.1l-2-1.1z"></svg:path><svg:path fill="none" d="M0 0h32v32H0z"></svg:path>`,
})
export class CarbonMicroservices1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
