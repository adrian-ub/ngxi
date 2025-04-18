import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMotorcycleOutlineIcon],svg[lsicon-motorcycle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9 3.5h3a1 1 0 1 1 0 2h-2m.5 0L11 9l-1.5 2.5h-8v-1a2 2 0 0 1 2-2h3m1 3L6 5.5H3M5.5 12a1.5 1.5 0 0 1-3 0m12 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path>`,
})
export class LsiconMotorcycleOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
