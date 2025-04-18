import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCalendarMonthSharpIcon],svg[material-symbols-light-calendar-month-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.23 14.154v-1.538h1.54v1.538zm-4 0v-1.538h1.54v1.538zm8 0v-1.538h1.54v1.538zm-4 3.846v-1.538h1.54V18zm-4 0v-1.538h1.54V18zm8 0v-1.538h1.54V18zM4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16zm1-1h14v-9.384H5z"></svg:path>`,
})
export class MaterialSymbolsLightCalendarMonthSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
