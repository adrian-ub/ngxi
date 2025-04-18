import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimAndroidIcon],svg[uim-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.975 3.019l.96-1.732a.193.193 0 0 0-.338-.187l-.97 1.75a6.54 6.54 0 0 0-5.253 0l-.97-1.75a.193.193 0 0 0-.34.187l.96 1.732a5.55 5.55 0 0 0-3.092 4.876h12.137a5.55 5.55 0 0 0-3.094-4.876M5.931 17.17A1.467 1.467 0 0 0 7.4 18.64h.973v3a1.36 1.36 0 1 0 2.721 0v-3h1.814v3a1.36 1.36 0 1 0 2.72 0v-3h.974a1.467 1.467 0 0 0 1.468-1.468V8.375H5.93ZM4.064 8.14a1.36 1.36 0 0 0-1.36 1.361v5.669a1.36 1.36 0 1 0 2.72 0V9.502a1.36 1.36 0 0 0-1.36-1.36Zm15.872 0a1.36 1.36 0 0 0-1.36 1.361v5.669a1.36 1.36 0 1 0 2.72 0V9.502a1.36 1.36 0 0 0-1.36-1.36Z"></svg:path><svg:circle cx="9.199" cy="5.168" r=".507" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="14.801" cy="5.168" r=".507" fill="currentColor" opacity=".5"></svg:circle>`,
})
export class UimAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
