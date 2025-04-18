import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonHeadphoneFillIcon],svg[iconamoon-headphone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-8 8v2h2a2 2 0 0 1 2 2v3a3 3 0 1 1-6 0v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a3 3 0 1 1-6 0v-3a2 2 0 0 1 2-2h2v-2a8 8 0 0 0-8-8" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonHeadphoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
