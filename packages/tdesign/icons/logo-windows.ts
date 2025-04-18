import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoWindowsIcon],svg[tdesign-logo-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 1.847V12H12V3.276zM14 5.01V10h6V4.153zm-3-1.188V12H2V5.303zM4 7.001v3h5V6.177zm-2 6h9V21.1l-9-.857zm2 2v3.423l5 .476V15zm8-2h10v9.156l-10-1.459zm2 2v3.968l6 .875V15z"></svg:path>`,
})
export class TdesignLogoWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
