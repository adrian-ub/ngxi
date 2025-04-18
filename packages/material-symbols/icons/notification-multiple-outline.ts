import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNotificationMultipleOutlineIcon],svg[material-symbols-notification-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22q-.825 0-1.412-.587T1 20V7h2v13h15v2zm11-8.35l-7-4.1V16h14V9.55zM7 18q-.825 0-1.412-.587T5 16V7.5q0-.525.238-1t.712-.75L14 1l2 1.175L7.2 7.35l6.8 4l6.75-4q.375-.225.763-.212t.737.212t.55.538t.2.762V16q0 .825-.587 1.413T21 18zm7-8l-2.8-2.8l1.4-1.4L14 7.2l3.55-3.55l1.4 1.4zm0 6h7H7z"></svg:path>`,
})
export class MaterialSymbolsNotificationMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
