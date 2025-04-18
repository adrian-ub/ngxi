import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimpledrawIcon],svg[arcticons-simpledraw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.33 5.87a1.15 1.15 0 0 1 1.66 0l7.49 7.49a1.15 1.15 0 0 1 0 1.67l-5 5l-9.16-9.16Zm-5 5L36.49 20l-1.67 1.67l-9.15-9.16Zm7.49 10.83l-18 18l-11.13 2.8h0L8.18 30l17.49-17.47M8.18 30.01l8.64 9.68m9.81-22.18L13.19 30.95M29.6 20.48L16.16 33.93"></svg:path>`,
})
export class ArcticonsSimpledrawIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
