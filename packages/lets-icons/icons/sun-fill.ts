import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSunFillIcon],svg[lets-icons-sun-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M17 18a5 5 0 1 0-10 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m17.5 12.5l2-2"></svg:path><svg:path stroke="currentColor" stroke-linecap="square" stroke-width="2" d="M5 18h14"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m4.5 10.5l2 2"></svg:path><svg:path fill="currentColor" d="m12 2l.707-.707L12 .586l-.707.707zm-1 8.5a1 1 0 1 0 2 0zm4.707-6.207l-3-3l-1.414 1.414l3 3zm-4.414-3l-3 3l1.414 1.414l3-3zM11 2v8.5h2V2z"></svg:path></svg:g>`,
})
export class LetsIconsSunFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
