import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitTableIcon],svg[formkit-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 16h-12C.67 16 0 15.33 0 14.5v-13C0 .67.67 0 1.5 0h12c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5M1.5 1c-.28 0-.5.22-.5.5v13c0 .28.22.5.5.5h12c.28 0 .5-.22.5-.5v-13c0-.28-.22-.5-.5-.5z"></svg:path><svg:path fill="currentColor" d="M7 .62h1v14.75H7z"></svg:path><svg:path fill="currentColor" d="M.38 5H14.5v1H.38zM.5 9.99h14v1H.5z"></svg:path>`,
})
export class FormkitTableIcon {
  readonly viewBox = input("0 0 15 16")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
