import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareRoundedLetterMFilledIcon],svg[tabler-square-rounded-letter-m-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.676 2.001L12 2c7.752 0 10 2.248 10 10l-.005.642C21.869 19.877 19.534 22 12 22l-.642-.005C4.228 21.87 2.063 19.6 2 12.325V12c0-7.643 2.185-9.936 9.676-9.999M16 8c0-1.014-1.336-1.384-1.857-.514L12 11.056l-2.143-3.57C9.336 6.616 8 6.986 8 8v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 10 16v-4.39l1.143 1.904l.074.108a1 1 0 0 0 1.64-.108L14 11.61V16a1 1 0 0 0 2 0z"></svg:path>`,
})
export class TablerSquareRoundedLetterMFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
