import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePatioIcon],svg[guidance-patio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M0 19.5h10m.5-5l-2-8H7.067a3 3 0 0 0-2.803 1.932L1 17m14 6.5c-1 0-1.75-1.5-1.75-1.5c-.75-1.5-.75-2.5-.75-4v-1.5h-7v-6M15.069 0c0 .33-.05.664-.206.955L14.838 1A3.81 3.81 0 0 1 11.5 2.97a3.81 3.81 0 0 1 3.569 2.469a3.81 3.81 0 0 1-.778 4.27a3.81 3.81 0 0 1 4.27-.778a3.81 3.81 0 0 1 2.47 3.569c0-1.455.815-2.72 2.014-3.363c.291-.156.624-.206.955-.206M19 .526A3.177 3.177 0 1 0 23.474 5m-16.28-.5s-1.81-.557-2.134-1.776A1.77 1.77 0 0 1 6.302.561a1.75 1.75 0 0 1 2.146 1.25c.324 1.219-.962 2.61-.962 2.61z"></svg:path>`,
})
export class GuidancePatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
