import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsScrollUnlock16Icon],svg[qlementine-icons-scroll-unlock-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 0a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 1 0V9h6.79l-2.65 2.65a.5.5 0 0 0 .707.707l4-4a.5.5 0 0 0 0-.707l-4-4a.5.5 0 0 0-.707.707l2.65 2.65H7v-6.5a.5.5 0 0 0-.5-.5zM1 7h3v2H1a1 1 0 0 1 0-2"></svg:path>`,
})
export class QlementineIconsScrollUnlock16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
