import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBedsideIcon],svg[icon-park-outline-bedside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 18h40v12H4zm0 12h40v12H4zm18-6h4m-4 12h4M8 42v4m32-4v4M24 18v-8m8 0H16"></svg:path>`,
})
export class IconParkOutlineBedsideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
