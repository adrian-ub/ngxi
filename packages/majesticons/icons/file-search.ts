import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsFileSearchIcon],svg[majesticons-file-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M3 19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-3.828-3.83A3 3 0 0 0 14.172 2H6a3 3 0 0 0-3 3v14zm7-4.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0zm1.5-3.5a3.5 3.5 0 1 0 1.665 6.58l1.128 1.127a1 1 0 0 0 1.414-1.414l-1.128-1.128A3.5 3.5 0 0 0 11.5 11z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsFileSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
