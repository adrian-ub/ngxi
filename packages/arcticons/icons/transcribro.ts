import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTranscribroIcon],svg[arcticons-transcribro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.277 34.098V39.5a3 3 0 0 1-3 3H9.992a3 3 0 0 1-3-3v-31a3 3 0 0 1 3-3h15.555m12.149 10.112a4.418 4.418 0 1 1-8.837 0V9.918a4.418 4.418 0 1 1 8.837 0z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.008 15.612a7.73 7.73 0 0 1-15.46 0m7.729 7.73v5.985m-11.046-1.466h-8.636m12.87 6.237h-12.87"></svg:path>`,
})
export class ArcticonsTranscribroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
