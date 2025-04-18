import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillBroadcastIcon],svg[quill-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 20.66a10 10 0 0 0 0-17.32M11 20.66a10 10 0 0 1 0-17.32m8 13.856a6 6 0 0 0 0-10.392m-6 10.392a6 6 0 0 1 0-10.392M13.09 26L16 18l2.91 8m-5.82 0L12 29m1.09-3h5.82M20 29l-1.09-3M18 12a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></svg:path>`,
})
export class QuillBroadcastIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
