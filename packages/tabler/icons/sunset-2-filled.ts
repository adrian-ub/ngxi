import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSunset2FilledIcon],svg[tabler-sunset-2-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm17 0a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2zM6.307 5.893l.7.7a1 1 0 0 1-1.414 1.414l-.7-.7a1 1 0 0 1 1.414-1.414m12.8 0a1 1 0 0 1 0 1.414l-.7.7a1 1 0 0 1-1.414-1.414l.7-.7a1 1 0 0 1 1.414 0M12 3a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1M3 16h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m9-8a5 5 0 0 1 4.583 7.002H7.417A5 5 0 0 1 12 8m0 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm5 0a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2z"></svg:path>`,
})
export class TablerSunset2FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
