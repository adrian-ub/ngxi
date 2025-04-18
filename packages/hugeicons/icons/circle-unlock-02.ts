import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleUnlock02Icon],svg[hugeicons-circle-unlock-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 15a7 7 0 1 1 14 0a7 7 0 0 1-14 0"></svg:path><svg:path d="M7.5 9.5v-3A4.5 4.5 0 0 1 15.742 4M12 16v-2"></svg:path></svg:g>`,
})
export class HugeiconsCircleUnlock02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
