import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCalendarCheckIcon],svg[cil-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 96h-88V40h-32v56H160V40h-32v56H40a24.03 24.03 0 0 0-24 24v336a24.03 24.03 0 0 0 24 24h432a24.03 24.03 0 0 0 24-24V120a24.03 24.03 0 0 0-24-24m-8 352H48V128h80v40h32v-40h192v40h32v-40h80Z"></svg:path><svg:path fill="currentColor" d="m243.397 313.373l-54.385-54.385l-22.627 22.628l77.012 77.011l125.615-125.615l-22.628-22.627z"></svg:path>`,
})
export class CilCalendarCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
