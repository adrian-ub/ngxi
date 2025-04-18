import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiNavigationSolidIcon],svg[mynaui-navigation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.16 3.064a1.234 1.234 0 0 0-2.32 0L4.34 19.98a1.31 1.31 0 0 0 .288 1.402c.344.346.917.512 1.458.216L12 18.357l5.915 3.24c.54.297 1.113.13 1.457-.215c.336-.34.49-.877.288-1.402z"></svg:path>`,
})
export class MynauiNavigationSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
