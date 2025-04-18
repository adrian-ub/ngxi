import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsSaveMultipleIcon],svg[proicons-save-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.558 2.75H8.75a3 3 0 0 0-3 3v9.5a3 3 0 0 0 3 3h.173m.635-15.5v2.942a1.5 1.5 0 0 0 1.5 1.5h2.346a1.5 1.5 0 0 0 1.5-1.5V2.75m-5.346 0h5.346m0 0h.026a3 3 0 0 1 2.122.879l3.32 3.32a3 3 0 0 1 .878 2.12v6.181a3 3 0 0 1-3 3h-.173m-9.154 0V12.5a2 2 0 0 1 2-2h5.154a2 2 0 0 1 2 2v5.75m-9.154 0h9.154"></svg:path><svg:path d="M17.25 21.25h-8.5a6 6 0 0 1-6-6v-8.5"></svg:path></svg:g>`,
})
export class ProiconsSaveMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
