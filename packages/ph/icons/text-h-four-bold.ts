import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextHFourBoldIcon],svg[ph-text-h-four-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M156 56v120a12 12 0 0 1-24 0v-48H52v48a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0v48h80V56a12 12 0 0 1 24 0m100 128a12 12 0 0 1-12 12v12a12 12 0 0 1-24 0v-12h-40a12 12 0 0 1-9.73-19l52-72a12 12 0 0 1 21.73 7v60a12 12 0 0 1 12 12m-36-34.89L203.47 172H220Z"></svg:path>`,
})
export class PhTextHFourBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
