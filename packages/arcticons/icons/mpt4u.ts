import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMpt4uIcon],svg[arcticons-mpt4u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.059 9.195l5.708 9.89l-8.468 14.585h5.485l5.63 9.83l-2.926-14.405l5.8-10.01L26.736 4.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21.22 33.6l-8.508-14.515L21.16 4.5h5.54l-8.47 14.585l5.691 9.86"></svg:path>`,
})
export class ArcticonsMpt4uIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
