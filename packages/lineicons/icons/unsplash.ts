import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsUnsplashIcon],svg[lineicons-unsplash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.871V22H2V10.871h6.258v5.548h7.42v-5.548zM15.742 2H8.258v5.58h7.42V2z"></svg:path>`,
})
export class LineiconsUnsplashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
