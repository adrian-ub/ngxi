import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestClockFarsightAnalogIcon],svg[material-symbols-nest-clock-farsight-analog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.55 16.55l1.4-1.425l-2.95-2.95V8h-2v5zM11 6h2V4h-2zm7 7h2v-2h-2zm-7 7h2v-2h-2zm-7-7h2v-2H4zm8 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></svg:path>`,
})
export class MaterialSymbolsNestClockFarsightAnalogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
