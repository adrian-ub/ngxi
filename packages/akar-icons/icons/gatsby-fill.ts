import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsGatsbyFillIcon],svg[akar-icons-gatsby-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#akarIconsGatsbyFill0)"><svg:path fill="currentColor" d="M12 0C5.323 0 0 5.317 0 12s5.317 12 12 12s12-5.323 12-12S18.683 0 12 0M2.608 12.101l9.29 9.286c-5.114.005-9.29-4.171-9.29-9.286m11.477 9.083L2.821 9.909C3.76 5.733 7.515 2.603 12 2.603a9.5 9.5 0 0 1 7.616 3.861l-1.355 1.147A7.67 7.67 0 0 0 11.9 4.267A7.57 7.57 0 0 0 4.693 9.38l9.814 9.819c2.4-.837 4.277-2.923 4.8-5.43h-4.07V12h6.155c0 4.485-3.13 8.245-7.307 9.184"></svg:path></svg:g><svg:defs><svg:clippath id="akarIconsGatsbyFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class AkarIconsGatsbyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
