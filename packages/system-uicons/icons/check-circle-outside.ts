import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsCheckCircleOutsideIcon],svg[system-uicons-check-circle-outside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.857 3.79a8 8 0 1 0 2.852 3.24"></svg:path><svg:path d="m6.5 9.5l3 3l8-8"></svg:path></svg:g>`,
})
export class SystemUiconsCheckCircleOutsideIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
