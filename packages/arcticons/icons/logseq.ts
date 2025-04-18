import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLogseqIcon],svg[arcticons-logseq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="11.064" cy="12.074" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.979" ry="7.403" transform="rotate(-30.724 11.064 12.074)"></svg:ellipse><svg:ellipse cx="27.007" cy="8.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="6.127" ry="4.158" transform="rotate(-15.513 27.007 8.83)"></svg:ellipse><svg:ellipse cx="27.983" cy="30.172" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="13.312" ry="15.347" transform="rotate(-85.227 27.983 30.172)"></svg:ellipse>`,
})
export class ArcticonsLogseqIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
