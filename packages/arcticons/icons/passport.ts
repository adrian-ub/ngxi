import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPassportIcon],svg[arcticons-passport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="31.868" cy="31.956" r="5.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.061 9.914h12v12h-12zm22.891.088h-6.976v12.193h12.017v-7.474"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.952 10.002c.49.054.982.108 1.602.42c.62.313 1.37.884 1.94 1.468s.962 1.177 1.182 1.651s.269.827.317 1.18M15.048 38.086h6.976V25.893H10.007v7.474m5.041 4.719c-.49-.053-.981-.107-1.602-.42c-.62-.312-1.37-.884-1.94-1.467s-.962-1.178-1.182-1.651s-.269-.827-.317-1.18"></svg:path>`,
})
export class ArcticonsPassportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
