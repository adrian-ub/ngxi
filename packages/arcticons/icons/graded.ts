import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGradedIcon],svg[arcticons-graded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.575 32.17c0 5.67 3.2 9.83 7.19 9.83h0c4 0 7.2-4.54 7.2-9.83h-7.2m-7.19-13.11v6.18M35.965 16c0-5.53-3.2-10-7.2-10h0c-4 0-7.19 4.43-7.19 10v3.1m-8.55 18.39l20.37-28.64m-17.73 31.42l19.8-27.74m-22.44 24.96l2.64 2.78m-2.64-2.78l-.99 3.81l3.63-1.03"></svg:path>`,
})
export class ArcticonsGradedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
