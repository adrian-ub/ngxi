import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZuhauseIcon],svg[arcticons-zuhause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 24v14.5c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4V24M24 5.5L5.5 24M24 5.5L42.5 24m-27.75-9.25l26.581 26.581M30.935 12.435L5.5 37.87"></svg:path>`,
})
export class ArcticonsZuhauseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
