import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextHFourThinIcon],svg[ph-text-h-four-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 56v120a4 4 0 0 1-8 0v-56H44v56a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v56h96V56a4 4 0 0 1 8 0m104 128a4 4 0 0 1-4 4h-12v20a4 4 0 0 1-8 0v-20h-52a4 4 0 0 1-3.16-6.46l56-72A4 4 0 0 1 236 112v68h12a4 4 0 0 1 4 4m-24-60.34L184.18 180H228Z"></svg:path>`,
})
export class PhTextHFourThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
