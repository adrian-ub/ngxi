import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightClockArrowUpIcon],svg[material-symbols-light-clock-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.734 18.308q-2.667 0-4.527-1.867t-1.86-4.534T4.208 7.37T8.733 5.5t4.532 1.867t1.87 4.534t-1.867 4.537t-4.534 1.87m10.15.692V6.916L17.4 8.4l-.708-.708L19.385 5l2.692 2.692l-.713.708l-1.48-1.479V19zm-7.845-4.02l.727-.707l-2.516-2.54v-3.54h-1v4z"></svg:path>`,
})
export class MaterialSymbolsLightClockArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
