import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilterIcon],svg[tdesign-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.57 3h18.86l-6.93 9.817V21h-5v-8.183zm3.86 2l5.07 7.183V19h1v-6.817L17.57 5z"></svg:path>`,
})
export class TdesignFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
