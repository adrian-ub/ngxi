import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandSoundcloudIcon],svg[tabler-brand-soundcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 11h1c1.38 0 3 1.274 3 3c0 1.657-1.5 3-3 3h-6V7c3 0 4.5 1.5 5 4M9 8v9m-3 0v-7m-3 6v-2"></svg:path>`,
})
export class TablerBrandSoundcloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
