import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCss2Icon],svg[proicons-css-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.75 5.25a1.5 1.5 0 0 1 1.5-1.5h11.5a3.5 3.5 0 0 1 3.5 3.5v9.5a3.5 3.5 0 0 1-3.5 3.5h-9.5a3.5 3.5 0 0 1-3.5-3.5z"></svg:path><svg:path d="M9.25 17.25h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1m4 0h-1a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1v0a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-1m6-5h-1a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1v0a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-1"></svg:path></svg:g>`,
})
export class ProiconsCss2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
