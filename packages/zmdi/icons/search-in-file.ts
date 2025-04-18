import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSearchInFileIcon],svg[zmdi-search-in-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m341 378l-81-82q17-27 17-59q0-44-31-75t-75-31t-75.5 31T64 237t31.5 75.5T171 344q31 0 59-18l94 95q-12 8-25 8H42q-17 0-29.5-12.5T0 387V45q0-17 12.5-29.5T43 3h170l128 128zM107 237.5q0-26.5 18.5-45.5t45-19t45.5 19t19 45.5t-19 45t-45.5 18.5t-45-18.5t-18.5-45"></svg:path>`,
})
export class ZmdiSearchInFileIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
