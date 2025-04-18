import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProgress02Icon],svg[hugeicons-progress-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 23.063c-5.93 0-10.75-4.82-10.75-10.75S6.07 1.563 12 1.563s10.75 4.82 10.75 10.75s-4.82 10.75-10.75 10.75m0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25s-4.15-9.25-9.25-9.25"></svg:path><svg:path d="M19.5 12.313a7.46 7.46 0 0 0-2.2-5.3a7.46 7.46 0 0 0-5.3-2.2v7.5z"></svg:path></svg:g>`,
})
export class HugeiconsProgress02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
