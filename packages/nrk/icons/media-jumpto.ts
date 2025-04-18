import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaJumptoIcon],svg[nrk-media-jumpto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M18 9.98C18 7.55 16 5 12.5 5S7 7.55 7 9.98v2.12l3-2.1v2.45l-4 2.8l-4-2.8V10l3 2.1V9.98C5 6.3 8.2 3 12.5 3S20 6.3 20 9.98v5.82h-2z" clip-rule="evenodd"></svg:path><svg:path d="M8 20a2 2 0 1 0-4 0a2 2 0 0 0 4 0m6 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m6 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path></svg:g>`,
})
export class NrkMediaJumptoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
