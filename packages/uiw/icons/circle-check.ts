import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwCircleCheckIcon],svg[uiw-circle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m4.922 6.583a.68.68 0 0 0-.963.053l-4.412 4.932l-2.832-3.03a.682.682 0 1 0-.996.931l3.34 3.575a.68.68 0 0 0 1.007-.01l4.91-5.489a.68.68 0 0 0-.054-.962"></svg:path>`,
})
export class UiwCircleCheckIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
