import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirAppStoreIcon],svg[iconoir-app-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M10.5 5.5l7 11m-4-11l-7 11m7-2.5h-7m11 0H16"></svg:path>`,
})
export class IconoirAppStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
