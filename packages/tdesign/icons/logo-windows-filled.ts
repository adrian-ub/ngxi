import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoWindowsFilledIcon],svg[tdesign-logo-windows-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.75 2.135v9.615h-9.5V3.492zm-11 1.982v7.633h-8.5V5.515zm-8.5 9.133h8.5v7.575l-8.5-.81zm10 0h9.5v8.617l-9.5-1.385z"></svg:path>`,
})
export class TdesignLogoWindowsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
