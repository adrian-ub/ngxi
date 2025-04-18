import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBook2Icon],svg[proicons-book-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.5 4.749a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v13h-15zm0 13v1.503a2 2 0 0 0 2 2h13"></svg:path><svg:rect width="8" height="3" x="8" y="6.25" rx=".6"></svg:rect></svg:g>`,
})
export class ProiconsBook2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
