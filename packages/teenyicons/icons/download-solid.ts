import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDownloadSolidIcon],svg[teenyicons-download-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 9.358V1h1v8.293l2.146-2.147l.708.708l-3.34 3.34L3.91 7.866l.678-.734zM2 13V7H1v7h13V7h-1v6z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsDownloadSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
