import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceTimeIcon],svg[guidance-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3 .5h18m-18 23h18m-15.5 0v-6l2.856-1.714a4.415 4.415 0 0 0 0-7.572L5.5 6.5v-6m13 0v6l-2.856 1.714a4.416 4.416 0 0 0 0 7.572L18.5 17.5v6"></svg:path>`,
})
export class GuidanceTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
