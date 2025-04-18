import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagClock48RegularIcon],svg[fluent-flag-clock-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 7.25C7.5 6.56 8.06 6 8.75 6h32.5a1.25 1.25 0 0 1 1.007 1.99L33.801 19.5l1.849 2.516Q35.326 22 35 22q-1.186.001-2.314.205l-1.443-1.965a1.25 1.25 0 0 1 0-1.48L38.78 8.5H10v22h12.8a13 13 0 0 0-.647 2.5H10v9.75a1.25 1.25 0 1 1-2.5 0zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-5 0a1 1 0 0 0-1-1h-4v-6a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1"></svg:path>`,
})
export class FluentFlagClock48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
