import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMountainSolidIcon],svg[mynaui-mountain-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.674 4.705l2.654 6.025a2.39 2.39 0 0 1 3.587.94l2.596 5.542c.75 1.603-.36 3.538-2.177 3.538H4.665c-1.81 0-2.922-1.924-2.181-3.527l5.808-12.56c.88-1.905 3.537-1.877 4.382.042"></svg:path>`,
})
export class MynauiMountainSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
