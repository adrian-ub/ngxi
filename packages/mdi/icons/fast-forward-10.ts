import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFastForward10Icon],svg[mdi-fast-forward-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12v10H8v-8H6v-2zm8 2v6c0 1.11-.89 2-2 2h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-4 0v6h2v-6zM11.5 3c2.65 0 5.05 1 6.9 2.6L21 3v7h-7l2.62-2.62C15.23 6.22 13.46 5.5 11.5 5.5c-3.54 0-6.55 2.31-7.6 5.5l-2.37-.78C2.92 6.03 6.85 3 11.5 3"></svg:path>`,
})
export class MdiFastForward10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
