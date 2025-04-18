import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconExportOutlineIcon],svg[lsicon-export-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.063 2.5H2.5v11h11V9m-5.579-.829l5.237-5.237m-3.19-.353h3.544V6"></svg:path>`,
})
export class LsiconExportOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
