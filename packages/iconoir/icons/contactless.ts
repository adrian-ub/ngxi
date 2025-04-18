import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirContactlessIcon],svg[iconoir-contactless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 21.5c4-5.5 4-13.5 0-19M11.5 20c3.5-5 3.5-11 0-16m-3 14c2.667-3.75 2.667-8.25 0-12m-3 10c1.5-2.5 1.5-5.5 0-8"></svg:path>`,
})
export class IconoirContactlessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
