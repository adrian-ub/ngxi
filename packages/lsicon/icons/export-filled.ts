import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconExportFilledIcon],svg[lsicon-export-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 2h5.063v1H3v10h10V9h1v5H2zm7.969.08h4.043V6h-1V3.788L8.275 8.525l-.707-.707l4.737-4.737H9.969z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconExportFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
