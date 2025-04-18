import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChevronDownBoxIcon],svg[mdi-chevron-down-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m-7 12.71l-6-6l1.41-1.42L12 12.88l4.59-4.59L18 9.71z"></svg:path>`,
})
export class MdiChevronDownBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
