import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelWrenchIcon],svg[raphael-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.834 14.693a7.06 7.06 0 0 0 1.193-7.334l-3.646 4.25l-3.593-.698l-1.19-3.462l3.636-4.242a7.063 7.063 0 0 0-8.106 9.903L5.625 24.04a2.79 2.79 0 0 0 4.209 3.661l9.493-10.917a7.07 7.07 0 0 0 7.508-2.09z"></svg:path>`,
})
export class RaphaelWrenchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
