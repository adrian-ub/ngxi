import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfVoicemailIcon],svg[wpf-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7c-3.302 0-6 2.698-6 6s2.698 6 6 6h14c3.302 0 6-2.698 6-6s-2.698-6-6-6s-6 2.698-6 6a5.98 5.98 0 0 0 1.531 4H10.47A5.98 5.98 0 0 0 12 13c0-3.302-2.698-6-6-6m0 2c2.221 0 4 1.779 4 4s-1.779 4-4 4s-4-1.779-4-4s1.779-4 4-4m14 0c2.221 0 4 1.779 4 4s-1.779 4-4 4s-4-1.779-4-4s1.779-4 4-4"></svg:path>`,
})
export class WpfVoicemailIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
