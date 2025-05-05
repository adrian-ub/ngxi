import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBoneIcon],svg[picon-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5q-4 3-2-1q-2-4 2-1h2q4-3 2 1q2 4-2 1"></svg:path>`,
})
export class PiconBoneIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
