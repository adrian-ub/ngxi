import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagAz4x3Icon],svg[flag-az-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3f9c35" d="M.1 0h640v480H.1z"></svg:path><svg:path fill="#ed2939" d="M.1 0h640v320H.1z"></svg:path><svg:path fill="#00b9e4" d="M.1 0h640v160H.1z"></svg:path><svg:circle cx="304" cy="240" r="72" fill="#fff"></svg:circle><svg:circle cx="320" cy="240" r="60" fill="#ed2939"></svg:circle><svg:path fill="#fff" d="m384 200l7.7 21.5l20.6-9.8l-9.8 20.7L424 240l-21.5 7.7l9.8 20.6l-20.6-9.8L384 280l-7.7-21.5l-20.6 9.8l9.8-20.6L344 240l21.5-7.7l-9.8-20.6l20.6 9.8z"></svg:path>`,
})
export class FlagAz4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
