import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBringBottomIcon],svg[uil-bring-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 14h-2a1 1 0 1 0 0 2h1v4H4v-4h7a1 1 0 0 0 0-2h-1V9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M4 10h4v4H4Zm8.71-3.3L14 5.41V17a1 1 0 1 0 2 0V5.41l1.29 1.29A1 1 0 0 0 18 7a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.41l-3-3a1 1 0 0 0-1.42 0l-3 3a1 1 0 0 0 0 1.41a1 1 0 0 0 1.42-.01"></svg:path>`,
})
export class UilBringBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
