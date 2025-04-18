import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapSearchFilledIcon],svg[tdesign-map-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l2.5 1.476V16.25a6.24 6.24 0 0 1 2.5-5V5.09l-5-2.952zM22 2.5v8.75A6.22 6.22 0 0 0 18.25 10c-.608 0-1.195.087-1.75.248v-5.48z"></svg:path><svg:path fill="currentColor" d="M23 16.25c0 .95-.278 1.833-.758 2.575l1.672 1.677l-1.416 1.412l-1.67-1.674A4.75 4.75 0 1 1 23 16.25m-2 0a2.75 2.75 0 1 0-.812 1.95l.008-.007A2.74 2.74 0 0 0 21 16.25"></svg:path>`,
})
export class TdesignMapSearchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
