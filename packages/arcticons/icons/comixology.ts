import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsComixologyIcon],svg[arcticons-comixology-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.317 24.503l2.28 9.859l-7.907 1.31l-1.043-4.378l-5.699 5.809L4.5 38.971l15.256-15.62l-2.668-11.241l8.137-.946l1.237 5.323l6.039-6.184L43.5 9.029z"></svg:path>`,
})
export class ArcticonsComixologyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
