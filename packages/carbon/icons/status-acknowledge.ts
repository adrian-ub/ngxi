import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStatusAcknowledgeIcon],svg[carbon-status-acknowledge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M24 30a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6zm0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4z" fill="currentColor"></svg:path><svg:path d="M12 15.59L9.41 13L8 14.41l4 4l7-7L17.59 10L12 15.59z" fill="currentColor"></svg:path><svg:path d="M14 24a10 10 0 1 1 10-10h2a12 12 0 1 0-12 12z" fill="currentColor"></svg:path>`,
})
export class CarbonStatusAcknowledgeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
