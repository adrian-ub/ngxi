import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrademarkIcon],svg[mdi-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.8 8.44H6.87V16H4.89V8.44H2V7h7.8zM13.5 7l2.46 6.5L18.41 7H21v9h-2v-2.5l.22-4.26L16.63 16h-1.35L12.7 9.25l.2 4.25V16h-1.97V7z"></svg:path>`,
})
export class MdiTrademarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
