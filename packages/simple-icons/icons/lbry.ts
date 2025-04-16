import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsLbryIcon],svg[simple-icons-lbry-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.35 14.19l.168-1.066l-1.031-.177l.067-.414l1.446.245l-.237 1.48zm.151-5.496v1.192l-11.734 7.211l-8.842-4.336l.017-.668l8.792 4.328L22.91 9.557v-.49l-10.55-5.09l-11.768 7.28v3.254l11.142 5.512l11.632-7.135l.33.507L11.767 20.7L0 14.883v-3.956L12.325 3.3z"></svg:path>`,
})
export class SimpleIconsLbryIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
