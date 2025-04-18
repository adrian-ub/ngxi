import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderCheckLineIcon],svg[ri-folder-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10v-2H4V5h5.586l2 2H20v6h2V6a1 1 0 0 0-1-1h-8.586l-2-2zm12.465 15.465L19 22l4.95-4.95l-1.415-1.414L19 19.172l-2.121-2.122z"></svg:path>`,
})
export class RiFolderCheckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
