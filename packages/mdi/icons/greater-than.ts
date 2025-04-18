import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGreaterThanIcon],svg[mdi-greater-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.5 4.14l-1 1.72L15 12L4.5 18.14l1 1.72L19 12z"></svg:path>`,
})
export class MdiGreaterThanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
