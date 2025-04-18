import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenUserGroupFill12Icon],svg[garden-user-group-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="3" cy="2" r="2"></svg:circle><svg:circle cx="8" cy="4.5" r="2.5"></svg:circle><svg:path d="M3 5C1.55 5 .34 6.03.06 7.4c-.06.31.18.6.5.6h4.89c.31 0 .55-.29.49-.6A3 3 0 0 0 3 5m5 3c-2.01 0-3.67 1.48-3.96 3.41c-.04.31.19.59.5.59h6.92c.31 0 .54-.28.5-.59A4.006 4.006 0 0 0 8 8"></svg:path></svg:g>`,
})
export class GardenUserGroupFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
