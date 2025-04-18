import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryAppsIcon],svg[memory-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7H3V3h4m6 4H9V3h4m6 4h-4V3h4M7 13H3V9h4m6 4H9V9h4m6 4h-4V9h4M7 19H3v-4h4m6 4H9v-4h4m6 4h-4v-4h4Z"></svg:path>`,
})
export class MemoryAppsIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
