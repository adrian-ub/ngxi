import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAppStoreIcon],svg[icon-park-outline-app-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m28 13l-6.5 11l-1.625 2.75l-.812 1.375M15 35l.813-1.375M12 29h11m7 0h6M19 13l3.5 5.5l.875 1.375M33 35l-3.5-5.5l-1.75-2.75l-.875-1.375"></svg:path></svg:g>`,
})
export class IconParkOutlineAppStoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
