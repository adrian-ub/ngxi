import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenNapIcon],svg[token-nap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.997 18.036q-.075.025-.148.047A6.36 6.36 0 0 1 7.505 16.5a6.355 6.355 0 1 1 6.491 1.537m-3.41-9.741H8.295v.524h.244l.285.31v5.519s0 .529-.529.529v.53h1.588v-.53s-.53-.027-.53-.53V9.704l5.538 6.003h.286V9.353s0-.53.53-.53v-.528h-1.589v.529s.53 0 .53.53v3.404z"></svg:path><svg:path d="M18.364 5.636A9 9 0 1 0 5.636 18.364A9 9 0 0 0 18.364 5.636m-3.73.007a6.885 6.885 0 1 0-5.274 12.72a6.885 6.885 0 0 0 5.275-12.72"></svg:path></svg:g>`,
})
export class TokenNapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
