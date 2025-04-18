import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuettaIcon],svg[arcticons-quetta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.289 32.36A18.3 18.3 0 0 0 42.293 24c0-10.16-8.236-18.398-18.397-18.398S5.5 13.84 5.5 24s8.236 18.398 18.396 18.398H42.5"></svg:path>`,
})
export class ArcticonsQuettaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
