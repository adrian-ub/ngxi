import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonHeadphoneIcon],svg[iconamoon-headphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M21 15v-3a9 9 0 1 0-18 0v3"></svg:path><svg:path fill="currentColor" d="M3 15v-1H2v1zm0 1h3v-2H3zm3 0v3h2v-3zm-2 3v-4H2v4zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm0-3h2a2 2 0 0 0-2-2zm15-1h1v-1h-1zm-3 1h3v-2h-3zm2-1v4h2v-4zm-2 4v-3h-2v3zm1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zm-2-5a2 2 0 0 0-2 2h2z"></svg:path></svg:g>`,
})
export class IconamoonHeadphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
