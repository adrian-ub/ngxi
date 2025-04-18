import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPictureInPictureExitIcon],svg[proicons-picture-in-picture-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.75 5.75h3.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-3.5"></svg:path><svg:rect width="12" height="10" x="13" y="12" fill="currentColor" rx="2" transform="rotate(180 13 12)"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 13.667V16.4a.6.6 0 0 1-.176.424M14.667 17H17.4a.6.6 0 0 0 .424-.176M14 13l3 3l.824.824"></svg:path></svg:g>`,
})
export class ProiconsPictureInPictureExitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
