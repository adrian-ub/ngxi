import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineUserPositioningIcon],svg[icon-park-outline-user-positioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="16" r="6"></svg:circle><svg:path d="M36 36c0-6.627-5.373-12-12-12s-12 5.373-12 12M36 4h8v8M12 4H4v8m32 32h8v-8m-32 8H4v-8"></svg:path></svg:g>`,
})
export class IconParkOutlineUserPositioningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
