import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLightRailIcon],svg[openmoji-light-rail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M68.197 49H18.769c-6.29 0-11.437-4.474-11.437-9.943S21.056 20 27.347 20h40.985v28.883a.127.127 0 0 1-.135.117"></svg:path><svg:path fill="#92d3f5" d="m30.331 38l10.589-9h4.411v9zm19 0l10.589-9h4.411v9zm-38.999-1s5-7 10-8a22.8 22.8 0 0 1 8 0l-7.57 7.782Z"></svg:path><svg:path fill="none" stroke="#ea5a47" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M64.332 43h-52"></svg:path><svg:path fill="#3f3f3f" d="M68.331 56h-57l6.235-4h50.765z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M68.331 56h-57l6.235-4h50.765zm-37-18h14v-8.357m5 8.357h14v-8.357m-36 .357l-7 7h-10"></svg:path><svg:path d="M68.197 49H18.769c-6.29 0-11.437-4.474-11.437-9.943h0C7.331 33.59 21.056 20 27.347 20h40.985v28.883a.127.127 0 0 1-.135.117"></svg:path></svg:g>`,
})
export class OpenmojiLightRailIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
