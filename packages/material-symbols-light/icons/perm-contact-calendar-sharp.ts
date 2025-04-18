import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPermContactCalendarSharpIcon],svg[material-symbols-light-perm-contact-calendar-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19.12q1.35-1.326 3.138-2.088T12 16.269t3.863.763T19 19.119V6H5zm7-5.62q-1.258 0-2.129-.871T9 10.5t.871-2.129T12 7.5t2.129.871T15 10.5t-.871 2.129T12 13.5M4 21V5h3.385V2.77h1.077V5h7.154V2.77h1V5H20v16z"></svg:path>`,
})
export class MaterialSymbolsLightPermContactCalendarSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
