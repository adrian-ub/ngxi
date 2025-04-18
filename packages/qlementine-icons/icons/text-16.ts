import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsText16Icon],svg[qlementine-icons-text-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V5c0-2 .5-3 3-3h1.5a.5.5 0 0 1 .5.5V13a1 1 0 0 1-1 1H4.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1H10a1 1 0 0 1-1-1V2.5a.5.5 0 0 1 .5-.5H11c2.5 0 3 1 3 3v.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsText16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
