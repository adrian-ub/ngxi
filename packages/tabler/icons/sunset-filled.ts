import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSunsetFilledIcon],svg[tabler-sunset-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm17 0a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2zM6.307 9.893l.7.7a1 1 0 0 1-1.414 1.414l-.7-.7a1 1 0 0 1 1.414-1.414m12.8 0a1 1 0 0 1 0 1.414l-.7.7a1 1 0 0 1-1.414-1.414l.7-.7a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v3.584l1.293-1.291a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-3 3a.98.98 0 0 1-.767.293l-.124-.017l-.127-.032l-.104-.04l-.115-.063a1 1 0 0 1-.151-.114L8.293 6.707a1 1 0 0 1 1.414-1.414L11 6.585V3a1 1 0 0 1 1-1M3 20h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m9-8a5 5 0 0 1 4.583 7.002H7.417A5 5 0 0 1 12 12"></svg:path>`,
})
export class TablerSunsetFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
