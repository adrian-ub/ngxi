import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDuaIcon],svg[hugeicons-dua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m19 13l-.658-.658a2 2 0 0 0-2.752-.073l-2.597 2.337a3 3 0 0 0-.993 2.23V21h2.687a3 3 0 0 0 2.204-.965l4.313-4.673A3 3 0 0 0 22 13.327V6h-1a2 2 0 0 0-2 2zm0 0l-3 3"></svg:path><svg:path d="m5 13l.658-.658a2 2 0 0 1 2.752-.073l2.597 2.337a3 3 0 0 1 .993 2.23V21H9.313a3 3 0 0 1-2.204-.965l-4.313-4.673A3 3 0 0 1 2 13.327V6h1a2 2 0 0 1 2 2zm0 0l3 3m7-8.566A3.23 3.23 0 1 1 10.566 3M14 4h.009"></svg:path></svg:g>`,
})
export class HugeiconsDuaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
