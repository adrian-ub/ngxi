import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineExpandUpIcon],svg[icon-park-outline-expand-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M6 16h36M20 32l4-4l4 4M6 10v12m36-12v12"></svg:path></svg:g>`,
})
export class IconParkOutlineExpandUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
