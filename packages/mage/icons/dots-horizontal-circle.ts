import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDotsHorizontalCircleIcon],svg[mage-dots-horizontal-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 0 0-19 0"></svg:path><svg:path d="M16.264 12a.673.673 0 1 0 1.346 0a.673.673 0 0 0-1.346 0m-4.937 0a.673.673 0 1 0 1.346 0a.673.673 0 0 0-1.346 0M6.39 12a.673.673 0 1 0 1.346 0a.673.673 0 0 0-1.346 0"></svg:path></svg:g>`,
})
export class MageDotsHorizontalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
