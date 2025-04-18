import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsUserRemoveIcon],svg[majesticons-user-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M2 9a6 6 0 1 1 9.642 4.769C14.186 14.907 16 17.208 16 20a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1c0-2.792 1.814-5.093 4.358-6.231A5.99 5.99 0 0 1 2 9zm15 2a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsUserRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
