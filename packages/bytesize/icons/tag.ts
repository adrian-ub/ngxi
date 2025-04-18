import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeTagIcon],svg[bytesize-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="24" cy="8" r="2"></svg:circle><svg:path d="M2 18L18 2h12v12L14 30Z"></svg:path></svg:g>`,
})
export class BytesizeTagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
