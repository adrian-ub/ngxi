import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStorageCardTwoIcon],svg[icon-park-storage-card-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="32" height="40" x="8" y="4" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M14 4V14H34V4"></svg:path><svg:rect width="20" height="20" x="14" y="24" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 32H34"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M34 29L34 35"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M14 29L14 35"></svg:path></svg:g>`,
})
export class IconParkStorageCardTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
