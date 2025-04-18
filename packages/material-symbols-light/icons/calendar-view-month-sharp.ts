import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCalendarViewMonthSharpIcon],svg[material-symbols-light-calendar-view-month-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.77 11.616V5.769h4.978v5.847zm5.747 0V5.769h4.966v5.847zm5.735 0V5.769h4.979v5.847zM3.769 18.23v-5.847h4.979v5.847zm5.748 0v-5.847h4.966v5.847zm5.735 0v-5.847h4.979v5.847z"></svg:path>`,
})
export class MaterialSymbolsLightCalendarViewMonthSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
