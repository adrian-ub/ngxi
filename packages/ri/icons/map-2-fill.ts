import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMap2FillIcon],svg[ri-map-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 5l7-3l6 3l6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3l-6-3l-6.303 2.701a.5.5 0 0 1-.697-.46zm13 14.764V7.176l-.065.028L9 4.236v12.588l.065-.028z"></svg:path>`,
})
export class RiMap2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
