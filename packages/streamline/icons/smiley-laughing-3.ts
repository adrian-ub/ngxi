import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyLaughing3Icon],svg[streamline-smiley-laughing-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M9 10.464a3.5 3.5 0 0 0 1.281-4.78l-6.062 3.5A3.5 3.5 0 0 0 9 10.463Zm-.902-7.562L7.55 4.95l1.732-1m-6.38 1.952l2.049.549l-1.732 1"></svg:path></svg:g>`,
})
export class StreamlineSmileyLaughing3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
