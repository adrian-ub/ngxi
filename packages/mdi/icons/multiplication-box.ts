import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMultiplicationBoxIcon],svg[mdi-multiplication-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2zm-8 14h2v-3.27l2.83 1.63l1-1.73L14 12l2.83-1.64l-1-1.73L13 10.27V7h-2v3.27L8.17 8.63l-1 1.73L10 12l-2.83 1.63l1 1.73L11 13.73z"></svg:path>`,
})
export class MdiMultiplicationBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
