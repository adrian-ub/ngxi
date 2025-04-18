import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherArrowUpCircleIcon],svg[feather-arrow-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m16 12l-4-4l-4 4m4 4V8"></svg:path></svg:g>`,
})
export class FeatherArrowUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
