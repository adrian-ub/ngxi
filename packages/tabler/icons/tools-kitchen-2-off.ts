import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerToolsKitchen2OffIcon],svg[tabler-tools-kitchen-2-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.386 10.409C14.916 8.129 16.152 5.717 19 3v12m-4 0h-1v-.941M19 19v2h-1v-3M8 8v13M5 5v2a3 3 0 0 0 4.546 2.572M11 7V4M3 3l18 18"></svg:path>`,
})
export class TablerToolsKitchen2OffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
