import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPhoneRetroLineIcon],svg[majesticons-phone-retro-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17.5 4.842C15.976 4.337 14.146 4 12 4s-3.976.337-5.5.842m11 0c3.021 1 4.835 2.66 5.5 3.658L20.5 11l-3-2zm-11 0c-3.021 1-4.835 2.66-5.5 3.658L3.5 11l3-2zM10 7v3m0 0l-5.414 5.414A2 2 0 0 0 4 16.828V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.172a2 2 0 0 0-.586-1.414L14 10m-4 0h4m0 0V7"></svg:path><svg:circle cx="12" cy="15" r="2"></svg:circle></svg:g>`,
})
export class MajesticonsPhoneRetroLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
