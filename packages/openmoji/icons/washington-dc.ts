import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWashingtonDcIcon],svg[openmoji-washington-dc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 29h62v7H5zm0 12h62v7H5zm19-22.5l.75 2.75h2.75l-2.125 1.5l.75 2.75L24 24l-2.125 1.5l.75-2.75l-2.125-1.5h2.75Zm12 0l.75 2.75h2.75l-2.125 1.5l.75 2.75L36 24l-2.125 1.5l.75-2.75l-2.125-1.5h2.75Zm12 0l.75 2.75h2.75l-2.125 1.5l.75 2.75L48 24l-2.125 1.5l.75-2.75l-2.125-1.5h2.75Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiWashingtonDcIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
