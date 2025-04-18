import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilterClearIcon],svg[tdesign-filter-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.57 3h18.86l-6.93 9.817V21h-5v-8.183zm3.86 2l5.07 7.183V19h1v-6.817L17.57 5zm11.45 8.465L20 15.586l2.122-2.121l1.414 1.414L21.415 17l2.121 2.122l-1.414 1.414L20 18.414l-2.12 2.122l-1.415-1.415l2.121-2.12l-2.121-2.122z"></svg:path>`,
})
export class TdesignFilterClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
