import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCheckCircleIcon],svg[mynaui-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="m8.667 12.633l1.505 1.721a1 1 0 0 0 1.564-.073L15.333 9.3"></svg:path></svg:g>`,
})
export class MynauiCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
