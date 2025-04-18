import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDetectorAlarmOutlineSharpIcon],svg[material-symbols-detector-alarm-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21v-5h2v5zm8.075-2.525l-3.55-3.525l1.425-1.425l3.525 3.55zm-14.15 0l-1.4-1.4l3.525-3.55l1.425 1.425zM5 5v1h14V5zm3.1 3l.3 1h7.2l.3-1zm-1.15 3L6 8H3V3h18v5h-3l-1.15 3zM5 5v1z"></svg:path>`,
})
export class MaterialSymbolsDetectorAlarmOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
