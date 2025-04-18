import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPermContactCalendarSharpIcon],svg[material-symbols-perm-contact-calendar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18.85q1.35-1.325 3.138-2.087T12 16t3.863.763T19 18.85V6H5zM12 14q-1.45 0-2.475-1.025T8.5 10.5t1.025-2.475T12 7t2.475 1.025T15.5 10.5t-1.025 2.475T12 14m-9 8V4h3V2h2v2h8V2h2v2h3v18z"></svg:path>`,
})
export class MaterialSymbolsPermContactCalendarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
