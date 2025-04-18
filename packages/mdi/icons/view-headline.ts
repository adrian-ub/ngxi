import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewHeadlineIcon],svg[mdi-view-headline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v2h17V5M4 11h17V9H4m0 10h17v-2H4m0-2h17v-2H4z"></svg:path>`,
})
export class MdiViewHeadlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
