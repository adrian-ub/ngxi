import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAldiGoIcon],svg[arcticons-aldi-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.217 11.384L12.5 31.966m12.465-20.582l-7.717 20.582m12.464-20.582l-7.716 20.582m8.615-15.436h1.054m-2.983 5.145h4.889m-6.819 5.146H35.5M37.323 4.5H10.677a4 4 0 0 0-4 4v26.646a4 4 0 0 0 4 4h16.627V43.5l4.58-4.354h5.44a4 4 0 0 0 4-4V8.5a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsAldiGoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
