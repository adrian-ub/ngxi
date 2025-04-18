import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingShop20FilledIcon],svg[fluent-building-shop-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12h2v2h-2zM5 2h10a.5.5 0 0 1 .384.18l2.5 3c.117.14.116.211.116.302V7c0 .888-.386 1.687-1 2.236V17.5a.5.5 0 0 1-.5.5H10v-6.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V18H3.5a.5.5 0 0 1-.5-.5V9.236C2.386 8.686 2 7.888 2 7V5.5a.5.5 0 0 1 .116-.32l2.5-3A.5.5 0 0 1 5 2M3 6v1a2 2 0 1 0 4 0V6zm5 0v1a2 2 0 1 0 4 0V6zm5 0v1a2 2 0 1 0 4 0V6zM5.234 3L3.568 5H7.14l.666-2zm6.572 2l-.666-2H8.86l-.666 2zm1.054 0h3.573l-1.667-2h-2.572zM11 11.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M9 18v-6H6v6z"></svg:path>`,
})
export class FluentBuildingShop20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
