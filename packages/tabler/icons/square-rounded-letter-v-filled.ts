import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareRoundedLetterVFilledIcon],svg[tabler-square-rounded-letter-v-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.676 2.001L12 2c7.752 0 10 2.248 10 10l-.005.642C21.869 19.877 19.534 22 12 22l-.642-.005C4.228 21.87 2.063 19.6 2 12.325V12c0-7.643 2.185-9.936 9.676-9.999m2.567 5.029a1 1 0 0 0-1.213.727L12 11.875l-1.03-4.118a1 1 0 1 0-1.94.486l2 8c.252 1.01 1.688 1.01 1.94 0l2-8a1 1 0 0 0-.727-1.213"></svg:path>`,
})
export class TablerSquareRoundedLetterVFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
