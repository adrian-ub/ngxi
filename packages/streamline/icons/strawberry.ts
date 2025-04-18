import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineStrawberryIcon],svg[streamline-strawberry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 .5C5.833.5 7 1.8 7 3C7 1.8 8.167.5 9 .5M2.5 7c0-2.8 2-4 4.5-4s4.5 1.2 4.5 4c0 3.5-2.5 6.5-4.5 6.5s-4.5-3-4.5-6.5"></svg:path><svg:path d="M4.75 7a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m1 3.558a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5m2.5.5a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5M7 7a.25.25 0 0 1 0-.5M7 7a.25.25 0 0 0 0-.5m2.25.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlineStrawberryIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
