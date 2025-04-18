import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonLetterMFilledIcon],svg[tabler-hexagon-letter-m-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015M16 8c0-1.014-1.336-1.384-1.857-.514L12 11.056l-2.143-3.57C9.336 6.616 8 6.986 8 8v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 10 16v-4.39l1.143 1.904l.074.108a1 1 0 0 0 1.64-.108L14 11.61V16a1 1 0 0 0 2 0z"></svg:path>`,
})
export class TablerHexagonLetterMFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
