import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkEllipsisIcon],svg[nrk-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-6 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-4 2a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path>`,
})
export class NrkEllipsisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
