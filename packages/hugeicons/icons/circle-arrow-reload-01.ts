import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowReload01Icon],svg[hugeicons-circle-arrow-reload-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m14.4 7.5l.915 1.17c.527.673.43.875-.418.875H9.6c-1.462 0-1.6.768-1.6 2.046M9.6 16.5l-.915-1.17c-.526-.673-.43-.876.418-.876H14.4c1.461 0 1.6-.767 1.6-2.045"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowReload01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
