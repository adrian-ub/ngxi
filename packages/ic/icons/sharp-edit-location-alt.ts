import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpEditLocationAltIcon],svg[ic-sharp-edit-location-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.95 13H9V8.05l5.61-5.61A8.2 8.2 0 0 0 12 2c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8c0-1.01-.16-1.94-.45-2.8zM11 11h2.12l6.16-6.16l-2.12-2.12L11 8.88zM19.29.59l-1.42 1.42l2.12 2.12l1.42-1.42z"></svg:path>`,
})
export class IcSharpEditLocationAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
