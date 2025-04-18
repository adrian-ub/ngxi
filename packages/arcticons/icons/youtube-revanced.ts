import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYoutubeRevancedIcon],svg[arcticons-youtube-revanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.836 11.62l10.946 28.955h2.43l10.952-28.959"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.348 10.583l15.263-.008a1.215 1.215 0 0 1 1.073 1.786L24.952 26.88a1.081 1.081 0 0 1-1.907.002L15.278 12.37a1.214 1.214 0 0 1 1.07-1.786Z"></svg:path>`,
})
export class ArcticonsYoutubeRevancedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
