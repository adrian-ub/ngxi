import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmKeyIcon],svg[charm-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 1.75a4.25 4.25 0 0 0-4.104 5.354L1.75 11.25v3h3v-1.5h1.5v-1.5h1.5L8.9 10.1q.54.147 1.1.15a4.25 4.25 0 0 0 0-8.5"></svg:path><svg:circle cx="10.75" cy="5.25" r=".5" fill="currentColor"></svg:circle></svg:g>`,
})
export class CharmKeyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
