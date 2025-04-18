import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextHSixThinIcon],svg[ph-text-h-six-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 148a32 32 0 0 0-9.75 1.52l21.18-35.47a4 4 0 0 0-6.86-4.1l-32.25 54a1 1 0 0 0-.08.17A32 32 0 1 0 212 148m0 56a24 24 0 1 1 24-24a24 24 0 0 1-24 24M148 56v120a4 4 0 0 1-8 0v-56H44v56a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v56h96V56a4 4 0 0 1 8 0"></svg:path>`,
})
export class PhTextHSixThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
