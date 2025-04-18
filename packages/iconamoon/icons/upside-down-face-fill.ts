import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonUpsideDownFaceFillIcon],svg[iconamoon-upside-down-face-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m13.966-1.134a1 1 0 0 1-1.367-.365C14.08 9.6 13.11 9 12 9s-2.08.601-2.6 1.5a1 1 0 0 1-1.73-1A5 5 0 0 1 12 7a5 5 0 0 1 4.33 2.5a1 1 0 0 1-.364 1.366M9 13a1.5 1.5 0 0 0-1.5 1.5v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5v-.01a1.5 1.5 0 0 0-1.5-1.5zm6 0a1.5 1.5 0 0 0-1.5 1.5v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5v-.01a1.5 1.5 0 0 0-1.5-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonUpsideDownFaceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
