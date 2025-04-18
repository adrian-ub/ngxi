import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizePlusIcon],svg[bytesize-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 2v28M2 16h28"></svg:path>`,
})
export class BytesizePlusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
