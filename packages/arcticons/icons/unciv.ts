import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUncivIcon],svg[arcticons-unciv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.13 5.45l-5.75 3.32v6.64l5.75 3.32l5.75-3.32V8.77Zm13.74 0l-5.75 3.32v6.64l5.75 3.32l5.76-3.32V8.77ZM10.25 17.36L4.5 20.68v6.64l5.75 3.32L16 27.32v-6.64Zm13.75 0l-5.75 3.32v6.64L24 30.64l5.75-3.32v-6.64Zm13.75 0L32 20.68v6.64l5.75 3.32l5.75-3.32v-6.64Zm-20.62 11.9l-5.75 3.33v6.64l5.75 3.32l5.75-3.32v-6.64Zm13.74 0l-5.75 3.33v6.64l5.75 3.32l5.76-3.32v-6.64Z"></svg:path>`,
})
export class ArcticonsUncivIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
