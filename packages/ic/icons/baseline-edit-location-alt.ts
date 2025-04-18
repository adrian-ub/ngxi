import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineEditLocationAltIcon],svg[ic-baseline-edit-location-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.95 13H9V8.05l5.61-5.61A8.2 8.2 0 0 0 12 2c-4.2 0-8 3.22-8 8.2c0 3.32 2.67 7.25 8 11.8c5.33-4.55 8-8.48 8-11.8c0-1.01-.16-1.94-.45-2.8z"></svg:path><svg:path fill="currentColor" d="M11 11h2.12l6.16-6.16l-2.12-2.12L11 8.88zm9.71-9L20 1.29c-.2-.19-.45-.29-.71-.29c-.13 0-.48.07-.71.29l-.72.72l2.12 2.12l.72-.72c.4-.39.4-1.02.01-1.41"></svg:path>`,
})
export class IcBaselineEditLocationAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
