import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNoteshelfIcon],svg[arcticons-noteshelf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.516 25.309l-5.825-5.825l-11.608 12.065l5.368 5.368z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.018 6.982a5.06 5.06 0 0 0-7.22.067l-11.553 11.99l6.716 6.715l11.99-11.552a5.06 5.06 0 0 0 .067-7.22m-19.252 9.263l8.79-9.166a2.27 2.27 0 0 1 3.242-.03M15.832 36.297l-7.85 5.88c-1.426 1.068-3.227-.733-2.159-2.159l5.88-7.85"></svg:path>`,
})
export class ArcticonsNoteshelfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
