import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiReaderIcon],svg[zmdi-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 192h149v32H256zm0-21h149zm0 106h149zM427 21q17 0 29.5 12.5T469 64v277q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V64q0-18 12.5-30.5T43 21zm0 320V64H235v277z"></svg:path>`,
})
export class ZmdiReaderIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
