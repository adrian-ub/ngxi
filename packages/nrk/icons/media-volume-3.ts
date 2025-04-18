import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaVolume3Icon],svg[nrk-media-volume-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.532 23l-5-6H1V7h6.532l5-6H15v22zM8.468 9H3v6h5.468L13 20.438V3.562zM19 17V7h-2v10zm4-13v16h-2V4z" clip-rule="evenodd"></svg:path>`,
})
export class NrkMediaVolume3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
