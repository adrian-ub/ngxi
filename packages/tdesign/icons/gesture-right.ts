import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureRightIcon],svg[tdesign-gesture-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 7.57a3 3 0 1 1 0 6H16v1.46a3 3 0 0 1-.409 1.511l-2.409 4.13a3 3 0 0 1-3.54 1.334l-6.09-2.03A3 3 0 0 1 1.5 17.129V9.055a3 3 0 0 1 1.17-2.378l6.288-4.836l1.527 1.017a2 2 0 0 1 .843 2.098l-.581 2.614zm1 3a1 1 0 0 0-1-1H8.253l1.122-5.048l-.333-.222L3.89 8.263a1 1 0 0 0-.39.792v8.074a1 1 0 0 0 .684.949l6.09 2.03a1 1 0 0 0 1.18-.445l2.41-4.13A1 1 0 0 0 14 15.03v-3.46h5.5a1 1 0 0 0 1-1"></svg:path>`,
})
export class TdesignGestureRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
