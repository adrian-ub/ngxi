import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBatteryStatusGoodOutlineSharpIcon],svg[material-symbols-battery-status-good-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.95 21.175L13.1 18.35l1.425-1.4l1.425 1.4l3.525-3.525l1.425 1.4zM7 22V4h3V2h4v2h3v8q-.525 0-1.025.088T15 12.35V6H9v14h2.35q.2.575.488 1.075t.687.925z"></svg:path>`,
})
export class MaterialSymbolsBatteryStatusGoodOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
