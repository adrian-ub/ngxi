import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisRulerIcon],svg[uis-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.6 7.1l-5.7-5.7c-.4-.4-1-.4-1.4 0L1.4 15.5c-.4.4-.4 1 0 1.4l5.7 5.7c.4.4 1 .4 1.4 0l2.1-2.1L7.1 17c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.5 3.5l1.4-1.4l-2.1-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.1 2.1l1.4-1.4l-3.5-3.5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.5 3.5l1.4-1.4l-2.1-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.1 2.1l2.1-2.1c.5-.5.5-1.2.1-1.5"></svg:path>`,
})
export class UisRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
