import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBook2Icon],svg[tabler-book-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 4v16H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></svg:path><svg:path d="M19 16H7a2 2 0 0 0-2 2M9 8h6"></svg:path></svg:g>`,
})
export class TablerBook2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
