import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsApkmirrorIcon],svg[arcticons-apkmirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 19.385L20.036 7.186l-4.117 12.199m1.372-4.117h5.337m9.454 4.117L28.118 7.187l-4.117 12.198"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.64 22.096h6.72v6.605h4.186l-3.768 3.888L24 36.478l-3.773-3.889l-3.768-3.888h4.181Zm-4.349 16.393h15.418"></svg:path>`,
})
export class ArcticonsApkmirrorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
