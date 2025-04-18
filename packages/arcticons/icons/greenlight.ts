import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGreenlightIcon],svg[arcticons-greenlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.29 13.79v13.89a6.53 6.53 0 0 0 6.53 6.53h3.68M24.16 20.635c0-3.902-3.258-7.042-7.197-6.835c-3.694.194-6.463 3.516-6.463 7.222v6.343c0 3.78 3.058 6.845 6.83 6.845h0c3.772 0 6.83-3.065 6.83-6.845h-6.83"></svg:path>`,
})
export class ArcticonsGreenlightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
