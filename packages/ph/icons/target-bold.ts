import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTargetBoldIcon],svg[ph-target-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.26 90.4a108 108 0 0 1-177.63 114A108 108 0 0 1 195.41 43.63l20.1-20.11a12 12 0 0 1 17 17l-96 96a12 12 0 1 1-17-17l24-24a36 36 0 1 0 19.76 39.65a12 12 0 0 1 23.53 4.74a60 60 0 1 1-25.73-62l17.23-17.17a84 84 0 1 0 28.46 38a12 12 0 1 1 22.5-8.35Z"></svg:path>`,
})
export class PhTargetBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
