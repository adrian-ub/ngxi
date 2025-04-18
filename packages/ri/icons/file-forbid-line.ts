import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileForbidLineIcon],svg[ri-file-forbid-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.29 20a7 7 0 0 0 .965 2H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.447 2 3.999 2H16l5 5v4.674a7 7 0 0 0-2-.603V8h-4V4H5v16zM18 23a5 5 0 1 1 0-10a5 5 0 0 1 0 10m-1.293-2.292a3 3 0 0 0 4.001-4.001zm-1.415-1.415l4.001-4a3 3 0 0 0-4.001 4.001"></svg:path>`,
})
export class RiFileForbidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
