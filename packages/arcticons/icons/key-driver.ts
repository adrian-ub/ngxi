import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeyDriverIcon],svg[arcticons-key-driver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18.197" height="30.248" x="14.902" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:circle cx="24" cy="20.95" r="4.881" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.09 34.748h11.82V42.5a1 1 0 0 1-1 1h-9.82a1 1 0 0 1-1-1zm2.551 0v7.215m2.35-7.215v5.995m2.35-5.995v5.995m2.35-5.995v7.215"></svg:path>`,
})
export class ArcticonsKeyDriverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
