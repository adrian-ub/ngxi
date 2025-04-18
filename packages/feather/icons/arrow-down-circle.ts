import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherArrowDownCircleIcon],svg[feather-arrow-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m8 12l4 4l4-4m-4-4v8"></svg:path></svg:g>`,
})
export class FeatherArrowDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
