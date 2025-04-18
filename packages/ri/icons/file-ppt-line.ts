import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFilePptLineIcon],svg[ri-file-ppt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM5 4v16h14V8h-3v6h-6v2H8V8h7V4zm5 6v2h4v-2z"></svg:path>`,
})
export class RiFilePptLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
