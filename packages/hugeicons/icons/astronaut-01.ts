import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAstronaut01Icon],svg[hugeicons-astronaut-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="11" r="3"></svg:circle><svg:path d="M17.657 18A9 9 0 1 0 3 11v9m15.5-2.5l-4.379-4.379M18 5l-3.88 3.879"></svg:path><svg:path d="M18 18H5c-.943 0-1.414 0-1.707.293S3 19.057 3 20s0 1.414.293 1.707S4.057 22 5 22h15a1 1 0 0 0 1-1a3 3 0 0 0-3-3"></svg:path></svg:g>`,
})
export class HugeiconsAstronaut01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
