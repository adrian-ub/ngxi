import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTextWrapLineIcon],svg[majesticons-text-wrap-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14M5 12h11c1 0 3 .5 3 2.5S17.333 17 16.5 17H12m-7 0h4m3 0l2-2m-2 2l2 2"></svg:path>`,
})
export class MajesticonsTextWrapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
