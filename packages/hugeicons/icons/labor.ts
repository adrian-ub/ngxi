import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLaborIcon],svg[hugeicons-labor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 22v-3c0-1.886 0-2.828-.586-3.414S17.886 15 16 15h-2l-2 2l-2-2H8c-1.886 0-2.828 0-3.414.586S4 17.114 4 19v3m12-7v7m-8-7v7m7.5-13V7a3.5 3.5 0 1 0-7 0v2a3.5 3.5 0 1 0 7 0m-8-1.5h9M12 2v1.5" color="currentColor"></svg:path>`,
})
export class HugeiconsLaborIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
