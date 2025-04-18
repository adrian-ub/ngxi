import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageVolumeZeroFillIcon],svg[mage-volume-zero-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.679 6.845v10.28a2.5 2.5 0 0 1-.26 1.11a2.15 2.15 0 0 1-.75.86a1.9 1.9 0 0 1-1.08.34a1.93 1.93 0 0 1-1.08-.33l-4-2.63a.5.5 0 0 0-.26-.08h-1.83a2 2 0 0 1-1.52-.72a2.42 2.42 0 0 1-.58-1.6v-4.18a2.4 2.4 0 0 1 .58-1.59a2 2 0 0 1 1.52-.69h1.89a.43.43 0 0 0 .26-.09l4-2.63a2.1 2.1 0 0 1 1.09-.33a2 2 0 0 1 1.09.34c.317.217.572.514.74.86c.142.342.207.71.19 1.08"></svg:path>`,
})
export class MageVolumeZeroFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
