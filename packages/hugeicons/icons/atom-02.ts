import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAtom02Icon],svg[hugeicons-atom-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.354 3.646C18.51 1.8 13.272 4.045 8.658 8.658c-4.613 4.614-6.858 9.85-5.012 11.696c1.845 1.846 7.082-.398 11.696-5.012s6.858-9.85 5.012-11.696"></svg:path><svg:path d="M3.646 3.646C1.8 5.49 4.045 10.728 8.658 15.342c4.614 4.614 9.85 6.858 11.696 5.012c1.846-1.845-.398-7.082-5.012-11.696S5.492 1.8 3.646 3.646M12.009 12H12"></svg:path></svg:g>`,
})
export class HugeiconsAtom02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
