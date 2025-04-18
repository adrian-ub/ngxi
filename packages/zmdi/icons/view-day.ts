import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiViewDayIcon],svg[zmdi-view-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v-64h405v64zm384-277q9 0 15 6t6 15v128q0 9-6 15t-15 6H21q-8 0-14.5-6T0 256V128q0-9 6.5-15t14.5-6zM0 0h405v64H0z"></svg:path>`,
})
export class ZmdiViewDayIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
