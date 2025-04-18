import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPictureInPicture2Icon],svg[proicons-picture-in-picture-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.25 4H5.75a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12.5a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3"></svg:path><svg:rect width="8.5" height="7.083" x="10.25" y="10.42" fill="currentColor" rx="1.5"></svg:rect></svg:g>`,
})
export class ProiconsPictureInPicture2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
