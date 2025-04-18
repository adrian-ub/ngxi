import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherCheckCircleIcon],svg[feather-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></svg:path><svg:path d="M22 4L12 14.01l-3-3"></svg:path></svg:g>`,
})
export class FeatherCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
