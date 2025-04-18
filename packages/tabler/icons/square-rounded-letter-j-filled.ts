import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareRoundedLetterJFilledIcon],svg[tabler-square-rounded-letter-j-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.676 2.001L12 2c7.752 0 10 2.248 10 10l-.005.642C21.869 19.877 19.534 22 12 22l-.642-.005C4.228 21.87 2.063 19.6 2 12.325V12c0-7.643 2.185-9.936 9.676-9.999M14 7h-4a1 1 0 0 0-1 1l.007.117A1 1 0 0 0 10 9h3v5a1 1 0 0 1-1.993.117L11 14a1 1 0 0 0-2 0a3 3 0 0 0 6 0V8a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerSquareRoundedLetterJFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
