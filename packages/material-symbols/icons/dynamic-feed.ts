import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDynamicFeedIcon],svg[material-symbols-dynamic-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19v-7h2v7h9v2zm4-4q-.825 0-1.412-.587T6 15V8h2v7h9v2zm4-4q-.825 0-1.412-.587T10 11V5q0-.825.588-1.412T12 3h8q.825 0 1.413.588T22 5v6q0 .825-.587 1.413T20 13zm0-2h8V7h-8z"></svg:path>`,
})
export class MaterialSymbolsDynamicFeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
