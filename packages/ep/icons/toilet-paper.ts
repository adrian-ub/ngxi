import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epToiletPaperIcon],svg[ep-toilet-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224M736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224s-160 97.28-160 224"></svg:path><svg:path fill="currentColor" d="M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96s64 43.008 64 96s-28.672 96-64 96"></svg:path>`,
})
export class EpToiletPaperIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
