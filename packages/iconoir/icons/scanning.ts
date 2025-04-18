import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirScanningIcon],svg[iconoir-scanning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 3H3v3m-1 6h20M9 19v-4m3 1v-1m3 2v-2m-3 6v-3m6-15h3v3M6 21H3v-3m15 3h3v-3"></svg:path>`,
})
export class IconoirScanningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
