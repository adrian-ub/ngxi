import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextHBoldIcon],svg[ph-text-h-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 56v144a12 12 0 0 1-24 0v-60H68v60a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0v60h120V56a12 12 0 0 1 24 0"></svg:path>`,
})
export class PhTextHBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
