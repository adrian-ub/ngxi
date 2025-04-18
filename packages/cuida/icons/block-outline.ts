import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaBlockOutlineIcon],svg[cuida-block-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="block-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path d="M18.707 5.793a1 1 0 0 1 0 1.414l-11.5 11.5a1 1 0 0 1-1.414-1.414l11.5-11.5a1 1 0 0 1 1.414 0"></svg:path></svg:g></svg:g>`,
})
export class CuidaBlockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
