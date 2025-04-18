import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisArrowCircleLeftIcon],svg[uis-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m3 11h-3.6l1.3 1.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-3-3c-.4-.4-.4-1 0-1.4l3-3c.4-.4 1-.4 1.4 0s.4 1 0 1.4L11.4 11H15c.6 0 1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class UisArrowCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
