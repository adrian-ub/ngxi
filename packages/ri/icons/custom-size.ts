import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCustomSizeIcon],svg[ri-custom-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h7V.5L18.5 4L15 7.5V5H8v2.5L4.5 4L8 .5zM3 17V6.5h2V17a2 2 0 0 0 2 2h10.5v2H7a4 4 0 0 1-4-4m18-1V9h2.5L20 5.5L16.5 9H19v7h-2.5l3.5 3.5l3.5-3.5z"></svg:path>`,
})
export class RiCustomSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
