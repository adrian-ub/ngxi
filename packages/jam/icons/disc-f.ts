import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDiscFIcon],svg[jam-disc-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m7-10a6.99 6.99 0 0 0-2.8-5.6L13 6a4.99 4.99 0 0 1 2 4a5 5 0 0 1-2 4l.58.87l.53.796A6.99 6.99 0 0 0 17 10m-7 3a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class JamDiscFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
