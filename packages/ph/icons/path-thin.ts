import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPathThinIcon],svg[ph-path-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 172a28 28 0 0 0-27.71 24H72a36 36 0 0 1 0-72h96a36 36 0 0 0 0-72H72a4 4 0 0 0 0 8h96a28 28 0 0 1 0 56H72a44 44 0 0 0 0 88h100.29A28 28 0 1 0 200 172m0 48a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhPathThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
