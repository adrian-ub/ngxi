import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowDownRight02Icon],svg[hugeicons-arrow-down-right-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 13L6 6m9.541 11.917l-1.242-.113c-2.012-.183-3.018-.274-3.254-.928s.477-1.368 1.906-2.797l1.128-1.128c1.429-1.429 2.143-2.143 2.797-1.906s.745 1.242.928 3.254l.113 1.242c.11 1.211.165 1.817-.197 2.18c-.362.361-.968.306-2.179.196" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowDownRight02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
