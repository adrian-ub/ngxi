import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsEyeIcon],svg[system-uicons-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 16q4.695 0 8.5-5.5Q15.195 5 10.5 5T2 10.5Q5.805 16 10.5 16"></svg:path><svg:path d="M10.5 7q.277 0 .543.042a2.5 2.5 0 0 0 2.915 2.916q.042.264.042.542A3.5 3.5 0 1 1 10.5 7"></svg:path></svg:g>`,
})
export class SystemUiconsEyeIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
