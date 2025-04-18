import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSuitcase2Icon],svg[majesticons-suitcase-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v15H8zM6 7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1zm12 14h1a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-1zM10 7h4V6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsSuitcase2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
