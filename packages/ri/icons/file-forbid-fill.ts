import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileForbidFillIcon],svg[ri-file-forbid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.674A7 7 0 0 0 12.255 22H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16l5 5zM18 23a5 5 0 1 1 0-10a5 5 0 0 1 0 10m-1.293-2.292a3 3 0 0 0 4.001-4.001zm-1.415-1.415l4.001-4a3 3 0 0 0-4.001 4.001"></svg:path>`,
})
export class RiFileForbidFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
