import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFilePptFillIcon],svg[ri-file-ppt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zM8 8v8h2v-2h6V8zm2 2h4v2h-4z"></svg:path>`,
})
export class RiFilePptFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
