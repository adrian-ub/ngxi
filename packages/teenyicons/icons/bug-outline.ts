import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBugOutlineIcon],svg[teenyicons-bug-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4.5 4.5h6m-6 0l-.367.733A6 6 0 0 0 3.5 7.916V10.5a4 4 0 0 0 8 0V7.916a6 6 0 0 0-.633-2.683L10.5 4.5m-6 0v-1a3 3 0 0 1 6 0v1M0 8.5h3.5m11.5 0h-3.5M1 14l3-1.5M14 14l-3-1.5M1 3l3 1.5M14 3l-3 1.5"></svg:path>`,
})
export class TeenyiconsBugOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
