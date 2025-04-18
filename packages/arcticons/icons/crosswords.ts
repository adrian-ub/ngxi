import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrosswordsIcon],svg[arcticons-crosswords-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.5 6.5h24.241v12.12m-12.12 12.121H6.5V6.5m12.759 12.759H43.5V43.5H19.259zM16.707 9.052L9.052 19.195m7.655 0L9.052 9.052"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.441 21.81l-3.253 10.143l-3.062-10.143l-3.254 10.143L21.81 21.81m19.33 19.138v-5.103l-2.743 3.445h3.381"></svg:path>`,
})
export class ArcticonsCrosswordsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
