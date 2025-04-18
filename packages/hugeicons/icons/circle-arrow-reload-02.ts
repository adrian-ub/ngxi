import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowReload02Icon],svg[hugeicons-circle-arrow-reload-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m16.5 9.6l-1.17-.915c-.673-.526-.876-.43-.876.418V14.4c0 1.461-.767 1.6-2.045 1.6M7.5 14.4l1.17.915c.673.527.875.43.875-.418V9.6c0-1.462.768-1.6 2.046-1.6"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowReload02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
