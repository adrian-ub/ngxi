import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLockedWithPenIcon],svg[fluent-emoji-flat-locked-with-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F9C23C" d="M2 14a3 3 0 0 1 3-3h2l1.5-1l1 1h7l1.5-1l1 1h2a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"></svg:path><svg:path fill="#433B6B" d="M14.5 20.5a2.5 2.5 0 1 0-3 0V24a1.5 1.5 0 0 0 3 0z"></svg:path><svg:path fill="#D3D3D3" d="M13 2a6 6 0 0 0-6 6v3h2.5V8a3.5 3.5 0 1 1 7 0v3H19V8a6 6 0 0 0-6-6m7 20v-6h9v6c0 .5-.25 1-.25 1l-3.25 6s-.294.59-.656.863c.055-.053-.069-.286-.183-.501c-.083-.156-.161-.302-.161-.362c0 .058-.08.204-.165.36c-.116.211-.241.44-.19.493c-.357-.278-.645-.853-.645-.853l-3.25-6s-.25-.5-.25-1"></svg:path><svg:path fill="#00A6ED" d="M19 15.25c0-.69.56-1.25 1.25-1.25h8.5a1.25 1.25 0 1 1 0 2.5h-8.5c-.69 0-1.25-.56-1.25-1.25"></svg:path><svg:path fill="#636363" d="M25 22.915a1.5 1.5 0 1 0-1 0V29.5a.5.5 0 0 0 1 0z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLockedWithPenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
