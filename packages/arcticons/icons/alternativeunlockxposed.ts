import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAlternativeunlockxposedIcon],svg[arcticons-alternativeunlockxposed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m34 33.993l2.68 2.683m-2.684-22.669l2.683-2.68"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" rx="4" ry="4"></svg:rect><svg:circle cx="24" cy="24" r="9.991"></svg:circle><svg:path d="m20.108 23.81l3.127 2.677l4.658-4.974M11.32 36.666l2.682-2.68m-2.673-22.662l2.68 2.683"></svg:path></svg:g>`,
})
export class ArcticonsAlternativeunlockxposedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
