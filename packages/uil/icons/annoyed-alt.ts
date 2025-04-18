import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilAnnoyedAltIcon],svg[uil-annoyed-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.66 13.56l-4.19 1.5A1 1 0 0 0 10.8 17a1 1 0 0 0 .34-.06l4.2-1.5a1 1 0 1 0-.68-1.88m-4-5a1 1 0 0 0-1.41 0a1 1 0 0 1-1.42 0a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42a3 3 0 0 0 4.24 0a1 1 0 0 0-.04-1.44Zm7 0a1 1 0 0 0-1.41 0a1 1 0 0 1-1.42 0a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42a3 3 0 0 0 4.24 0a1 1 0 0 0-.04-1.44ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path>`,
})
export class UilAnnoyedAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
