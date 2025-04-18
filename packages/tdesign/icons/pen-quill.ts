import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPenQuillIcon],svg[tdesign-pen-quill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.302 8.118l-11.14 11.094l-5.416-.697l-3.673 3.673l-1.414-1.414l3.669-3.67l-.742-5.41L15.672.565l1.816 5.787zm-7.745-1.242l-.803-2.557l-8.052 8.085l.401 2.926zm-7.025 9.853l2.914.375l8.076-8.045l-2.546-.773z"></svg:path>`,
})
export class TdesignPenQuillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
