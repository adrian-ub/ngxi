import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsMergeThinIcon],svg[ph-arrows-merge-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 40v64a4 4 0 0 1-1.17 2.83L132 161.66v60.68l25.17-25.17a4 4 0 0 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0l-32-32a4 4 0 0 1 5.66-5.66L124 222.34v-60.68l-54.83-54.83A4 4 0 0 1 68 104V40a4 4 0 0 1 8 0v62.34l52 52l52-52V40a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhArrowsMergeThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
