import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPdf2Icon],svg[proicons-pdf-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M7.792 21.25h8.416a3.5 3.5 0 0 0 3.5-3.5v-5.53a3.5 3.5 0 0 0-1.024-2.475l-5.969-5.97A3.5 3.5 0 0 0 10.24 2.75H7.792a3.5 3.5 0 0 0-3.5 3.5v11.5a3.5 3.5 0 0 0 3.5 3.5"></svg:path><svg:path stroke-width="1.5" d="M11.688 3.11v5.66a2 2 0 0 0 2 2h5.662"></svg:path><svg:path d="M7.25 16.5v-1m0 0v-2h1a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1zm4 1v-3h.5a1.5 1.5 0 0 1 0 3zm4 0v-1.25m1.5-1.75h-1.5v1.75m0 0h1.5"></svg:path></svg:g>`,
})
export class ProiconsPdf2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
