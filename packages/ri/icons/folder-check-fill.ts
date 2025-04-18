import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderCheckFillIcon],svg[ri-folder-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c1.093 0 2.117.292 3 .803V6a1 1 0 0 0-1-1h-8.586l-2-2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10.341A6 6 0 0 1 19 13m-3.536 5.465L19 22l4.95-4.95l-1.415-1.414L19 19.172l-2.121-2.122z"></svg:path>`,
})
export class RiFolderCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
