import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherFileTextIcon],svg[feather-file-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></svg:path><svg:path d="M14 2v6h6m-4 5H8m8 4H8m2-8H8"></svg:path></svg:g>`,
})
export class FeatherFileTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
