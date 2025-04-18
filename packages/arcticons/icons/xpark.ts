import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXparkIcon],svg[arcticons-xpark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.279 25.347h-1.467l-1.044-2.065L42.5 9.186l-11.155-.001l-5.604 6.988l-2.977-6.988h-10.42l6.634 13.647l-2.376 2.514h1.627L5.5 38.816h11.468l7.476-9.052l3.864 9.051h10.783z"></svg:path>`,
})
export class ArcticonsXparkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
