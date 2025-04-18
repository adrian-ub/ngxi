import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsYogaBallIcon],svg[hugeicons-yoga-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M18.853 4.717C18.038 9.422 13.937 13 9 13a9.97 9.97 0 0 1-6.854-2.717m19.664-.233C19.693 14.738 14.977 18 9.5 18a13.44 13.44 0 0 1-6.52-1.676m.674-9.836a7.002 7.002 0 0 0 11.202-4.074"></svg:path></svg:g>`,
})
export class HugeiconsYogaBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
