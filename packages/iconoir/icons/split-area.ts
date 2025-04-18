import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSplitAreaIcon],svg[iconoir-split-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 20H4v-4h16zM2 12h20M7 4H4v3m7-3h2m4 0h3v3"></svg:path>`,
})
export class IconoirSplitAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
