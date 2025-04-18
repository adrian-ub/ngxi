import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCrosshairSolidIcon],svg[mynaui-crosshair-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11.25a.75.75 0 0 1 0 1.5H2.278a9.75 9.75 0 0 0 8.972 8.971V18a.75.75 0 0 1 1.5 0v3.721a9.75 9.75 0 0 0 8.971-8.971H18a.75.75 0 1 1 0-1.5h3.721a9.75 9.75 0 0 0-8.971-8.972V6a.75.75 0 0 1-1.5 0V2.278a9.75 9.75 0 0 0-8.972 8.972z"></svg:path>`,
})
export class MynauiCrosshairSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
