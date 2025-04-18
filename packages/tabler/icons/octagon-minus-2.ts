import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerOctagonMinus2Icon],svg[tabler-octagon-minus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13.039 21.734l-.237.101c-.512.22-1.092.22-1.604 0l-5.575-2.389a2.04 2.04 0 0 1-1.07-1.07l-2.388-5.574a2.04 2.04 0 0 1 0-1.604l2.389-5.575c.206-.48.589-.863 1.07-1.07l5.574-2.388a2.04 2.04 0 0 1 1.604 0l5.575 2.389c.48.206.863.589 1.07 1.07l2.388 5.574c.22.512.22 1.092 0 1.604l-.94 2.196M16 19h6"></svg:path>`,
})
export class TablerOctagonMinus2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
