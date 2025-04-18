import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsKauflandIcon],svg[simple-icons-kaufland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 24h24V0H0zm23.008-.989H.989V.989h22.022zM3.773 3.776h7.651v7.65H3.773zm8.801 0v7.652l7.653-7.652zm-8.801 8.8h7.651v7.651H3.773zm8.801-.004v7.652h7.653z"></svg:path>`,
})
export class SimpleIconsKauflandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
