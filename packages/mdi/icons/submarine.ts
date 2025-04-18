import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSubmarineIcon],svg[mdi-submarine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.67C6.78 4.53 5.39 4.93 4 5H2v2h2c1.37 0 2.74-.35 4-1c2.5 1.3 5.5 1.3 8 0c1.26.65 2.62.94 4 1h2V5h-2c-1.39 0-2.78-.47-4-1.33c-2.44 1.71-5.56 1.71-8 0m8 5L15 10v2h-1l-2 2H9l-3 2l-1-2H4v2l-2 1l2 1v2h1.14L6 18l3 2h11a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2l-1-1v-1h-1v-2h1V8.67Z"></svg:path>`,
})
export class MdiSubmarineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
