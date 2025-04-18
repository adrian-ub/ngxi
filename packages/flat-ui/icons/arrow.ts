import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiArrowIcon],svg[flat-ui-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:clippath id="flatUiArrow0"><svg:circle cx="50" cy="50" r="50"></svg:circle></svg:clippath><svg:g fill-rule="evenodd" clip-path="url(#flatUiArrow0)" clip-rule="evenodd"><svg:circle cx="50" cy="50" r="50" fill="#24AE5F"></svg:circle><svg:path fill="#E57D25" d="M34 50.5a2.5 2.5 0 0 0 2.5 2.5h66a2.5 2.5 0 1 0 0-5h-66a2.5 2.5 0 0 0-2.5 2.5"></svg:path><svg:path fill="#FBF063" d="m23 31l16 17h44L67 31z"></svg:path><svg:path fill="#F0C419" d="m67 70l16-17H39L23 70z"></svg:path></svg:g>`,
})
export class FlatUiArrowIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
