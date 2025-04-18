import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureLeftIcon],svg[tdesign-gesture-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 7.57a3 3 0 1 0 0 6H8v1.46a3 3 0 0 0 .409 1.511l2.409 4.13a3 3 0 0 0 3.54 1.334l6.09-2.03a3 3 0 0 0 2.052-2.846V9.055a3 3 0 0 0-1.17-2.378l-6.288-4.836l-1.527 1.017a2 2 0 0 0-.843 2.098l.581 2.614zm-1 3a1 1 0 0 1 1-1h11.247l-1.122-5.048l.333-.222l5.152 3.963a1 1 0 0 1 .39.792v8.074a1 1 0 0 1-.684.949l-6.09 2.03a1 1 0 0 1-1.18-.445l-2.41-4.13A1 1 0 0 1 10 15.03v-3.46H4.5a1 1 0 0 1-1-1"></svg:path>`,
})
export class TdesignGestureLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
