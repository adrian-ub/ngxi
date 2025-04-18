import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterKSolidIcon],svg[mynaui-letter-k-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.997 6.336a1 1 0 0 0-1.411-.083L10 10.329V7a1 1 0 0 0-2 0v10a1 1 0 1 0 2 0v-3.329l4.586 4.076a1 1 0 0 0 1.328-1.494L11.13 12l4.784-4.253a1 1 0 0 0 .083-1.411"></svg:path>`,
})
export class MynauiLetterKSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
