import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMindvalleyIcon],svg[arcticons-mindvalley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.5 32.555v-8.392a5.85 5.85 0 0 0-3.76-5.473c-3.116-1.193-8.035-2.679-14.24-3.246c2.828 6.165 8.259 12.648 18 17.111m3 0v-8.392a5.85 5.85 0 0 1 3.76-5.473c3.116-1.193 8.035-2.679 14.24-3.246c-2.828 6.165-8.259 12.648-18 17.111"></svg:path>`,
})
export class ArcticonsMindvalleyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
