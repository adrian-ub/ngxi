import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquareLetterMFilledIcon],svg[tabler-square-letter-m-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-3 6c0-1.014-1.336-1.384-1.857-.514L12 11.056l-2.143-3.57C9.336 6.616 8 6.986 8 8v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 10 16v-4.39l1.143 1.904l.074.108a1 1 0 0 0 1.64-.108L14 11.61V16a1 1 0 0 0 2 0z"></svg:path>`,
})
export class TablerSquareLetterMFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
