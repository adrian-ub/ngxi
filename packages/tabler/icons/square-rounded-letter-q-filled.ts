import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareRoundedLetterQFilledIcon],svg[tabler-square-rounded-letter-q-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.676 2.001L12 2c7.752 0 10 2.248 10 10l-.005.642C21.869 19.877 19.534 22 12 22l-.642-.005C4.228 21.87 2.063 19.6 2 12.325V12c0-7.643 2.185-9.936 9.676-9.999M12 7a3 3 0 0 0-3 3v4a3 3 0 0 0 4.168 2.764l.125-.057a1 1 0 0 0 1.414-1.414l.057-.125A3 3 0 0 0 15 14v-4a3 3 0 0 0-3-3m1 7.001h-.059a.996.996 0 0 0-.941 1A1 1 0 0 1 11 14v-4a1 1 0 0 1 2 0z"></svg:path>`,
})
export class TablerSquareRoundedLetterQFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
