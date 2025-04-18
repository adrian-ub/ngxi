import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPictureInPictureIcon],svg[proicons-picture-in-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.25 18.25h-3.5a3 3 0 0 1-3-3v-8.5a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v3.5"></svg:path><svg:rect width="12" height="10" x="11" y="12" fill="currentColor" rx="2"></svg:rect></svg:g>`,
})
export class ProiconsPictureInPictureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
