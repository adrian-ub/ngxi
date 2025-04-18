import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoupleWidgetIcon],svg[arcticons-couple-widget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.745 20.765a2.71 2.71 0 0 0-2.324-1.316a2.715 2.715 0 0 0-2.533 3.686c.898 2.583 4.857 5.416 4.857 5.416s3.96-2.833 4.857-5.416a2.715 2.715 0 0 0-2.533-3.687a2.71 2.71 0 0 0-2.324 1.317M10 19.449v9.102h4.551m16.676-9.102l-3.015 9.102l-3.016-9.102M33.449 24h2.967M38 28.551h-4.551v-9.102H38"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsCoupleWidgetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
