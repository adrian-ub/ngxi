import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiImageFilterCenterFocusWeakIcon],svg[mdi-image-filter-center-focus-weak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15H3v4a2 2 0 0 0 2 2h4v-2H5M5 5h4V3H5a2 2 0 0 0-2 2v4h2m14-6h-4v2h4v4h2V5a2 2 0 0 0-2-2m0 16h-4v2h4a2 2 0 0 0 2-2v-4h-2m-7-7a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 6a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MdiImageFilterCenterFocusWeakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
