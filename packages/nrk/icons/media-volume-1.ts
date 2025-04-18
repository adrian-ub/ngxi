import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaVolume1Icon],svg[nrk-media-volume-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.532 17l5 6H15V1h-2.468l-5 6H1v10zM3 9h5.468L13 3.562v16.876L8.468 15H3zm16 0v6h-2V9z" clip-rule="evenodd"></svg:path>`,
})
export class NrkMediaVolume1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
