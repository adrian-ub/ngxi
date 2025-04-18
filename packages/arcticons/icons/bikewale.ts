import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBikewaleIcon],svg[arcticons-bikewale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M45.5 24c0 4-1.09 7.74-3 10.94a21.4 21.4 0 0 1-5.95 6.51c-.97.7-2.15 1.05-3.35 1.05H14.8c-1.2 0-2.38-.35-3.35-1.05a21.4 21.4 0 0 1-5.95-6.51c-1.91-3.2-3-6.94-3-10.94s1.09-7.74 3-10.94c1.83-3.11 4.45-5.73 7.56-7.56c3.2-1.91 6.94-3 10.94-3s7.74 1.09 10.94 3c3.11 1.83 5.73 4.45 7.56 7.56c1.91 3.2 3 6.94 3 10.94"></svg:path><svg:circle cx="24" cy="24" r="5.66"></svg:circle><svg:path d="m27.53 19.58l13.39-8.83M27.42 28.5l13.04 9.32"></svg:path></svg:g>`,
})
export class ArcticonsBikewaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
