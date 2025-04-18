import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsImportFillIcon],svg[lets-icons-import-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.293 9.707l5 5l.707.707l.707-.707l5-5l-1.414-1.414L13 11.586V4h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5v7.586L7.707 8.293z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsImportFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
