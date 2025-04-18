import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookOpenAltDuotoneIcon],svg[lets-icons-book-open-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="letsIconsBookOpenAltDuotone0" width="9" height="15" x="3" y="4" maskUnits="userSpaceOnUse" style="mask-type:alpha"><svg:path fill="#222" d="M12 19V6s-1-2-4.5-2S3 6 3 6v13s1-2 4.5-2s4.5 2 4.5 2"></svg:path></svg:mask><svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M12 19V6s-1-2-4.5-2S3 6 3 6v13s1-2 4.5-2s4.5 2 4.5 2"></svg:path><svg:g mask="url(#letsIconsBookOpenAltDuotone0)"><svg:path fill="currentColor" d="M5 4.15A.15.15 0 0 1 5.15 4h2.7a.15.15 0 0 1 .15.15v4.246a.25.25 0 0 1-.427.177l-.896-.896a.25.25 0 0 0-.354 0l-.896.896A.25.25 0 0 1 5 8.396z"></svg:path></svg:g><svg:path fill="currentColor" d="M13 19V6s.889-2 4-2s4 2 4 2v13s-.889-2-4-2s-4 2-4 2"></svg:path></svg:g>`,
})
export class LetsIconsBookOpenAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
