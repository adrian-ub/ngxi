import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizePhotoIcon],svg[bytesize-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m20 24l-8-8L2 26V2h28v22m-14-4l6-6l8 8v8H2v-6"></svg:path><svg:circle cx="10" cy="9" r="3"></svg:circle></svg:g>`,
})
export class BytesizePhotoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
