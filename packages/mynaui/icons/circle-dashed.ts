import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleDashedIcon],svg[mynaui-circle-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 0 1-.706 3.5M12 21a9 9 0 0 1-3.5-.706M3 12c0-1.241.251-2.424.706-3.5M12 3c1.241 0 2.424.251 3.5.706m-9.864 1.93A9 9 0 0 1 8.5 3.706m9.864 14.658a9 9 0 0 1-2.864 1.93m2.864-14.658a9 9 0 0 1 1.93 2.864M5.636 18.364a9 9 0 0 1-1.93-2.864"></svg:path>`,
})
export class MynauiCircleDashedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
