import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasSmileyIcon],svg[pajamas-smiley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1 6a3 3 0 0 0 3-3H5a3 3 0 0 0 3 3m3-6a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class PajamasSmileyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
