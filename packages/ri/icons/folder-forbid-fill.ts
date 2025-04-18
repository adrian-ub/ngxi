import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderForbidFillIcon],svg[ri-folder-forbid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11.255A7 7 0 0 0 12.255 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2H21a1 1 0 0 1 1 1zM18 22a5 5 0 1 1 0-10a5 5 0 0 1 0 10m-1.293-2.292a3 3 0 0 0 4.001-4.001zm-1.415-1.415l4.001-4a3 3 0 0 0-4.001 4.001"></svg:path>`,
})
export class RiFolderForbidFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
