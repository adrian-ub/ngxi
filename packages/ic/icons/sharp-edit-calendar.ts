import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpEditCalendarIcon],svg[ic-sharp-edit-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22H3V4h3V2h2v2h8V2h2v2h3v8h-2v-2H5v10h7zm10.13-5.01l1.41-1.41l-2.12-2.12l-1.41 1.41zm-.71.71l-5.3 5.3H14v-2.12l5.3-5.3z"></svg:path>`,
})
export class IcSharpEditCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
