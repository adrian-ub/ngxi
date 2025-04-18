import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlowchart32RegularIcon],svg[fluent-flowchart-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H9v5.266a2 2 0 0 1 .416.32l4.003 4.002a2 2 0 0 1 .317.412H19v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-1h-5.262q-.128.225-.32.416L9.417 29.42a2 2 0 0 1-2.828 0l-4.002-4.003a2 2 0 0 1 0-2.828l4.002-4.002q.19-.19.412-.317V13H6a3 3 0 0 1-3-3zm5.002 14L4 24.002l4.002 4.002L12 24.007v-.01zM6 5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm16 16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"></svg:path>`,
})
export class FluentFlowchart32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
