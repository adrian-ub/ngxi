import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCastleIcon],svg[icon-park-solid-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m4 11l7-7l7 7zm26 0l7-7l7 7z"></svg:path><svg:path fill="currentColor" d="M44 44V26h-4v-9h-6v9h-6v-5l-4-4l-4 4v5h-6v-9H8v9H4v18h14v-4a6 6 0 0 1 12 0v4z"></svg:path><svg:path d="M7 11h8v6H7zm26 0h8v6h-8z"></svg:path></svg:g>`,
})
export class IconParkSolidCastleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
