import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSigmaThinIcon],svg[ph-sigma-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M188 72V52H72.32l58.8 73.5a4 4 0 0 1 0 5L72.32 204H188v-20a4 4 0 0 1 8 0v24a4 4 0 0 1-4 4H64a4 4 0 0 1-3.12-6.5l62-77.5l-62-77.5A4 4 0 0 1 64 44h128a4 4 0 0 1 4 4v24a4 4 0 0 1-8 0"></svg:path>`,
})
export class PhSigmaThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
