import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsProjectOutlinedIcon],svg[eos-icons-project-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M6 17h12v2H6zm4-5.17l2.792 2.794l3.932-3.935L18 12V8h-4l1.31 1.275l-2.519 2.519L10 9l-4 4l1.414 1.414z"></svg:path><svg:path fill="currentColor" d="M19 3h-3.298a5 5 0 0 0-.32-.425l-.01-.012a4.43 4.43 0 0 0-2.89-1.518a2.6 2.6 0 0 0-.964 0a4.43 4.43 0 0 0-2.89 1.518l-.01.012a5 5 0 0 0-.32.424V3H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V6a3.003 3.003 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.55a2.5 2.5 0 0 1 4.9 0H19a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class EosIconsProjectOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
