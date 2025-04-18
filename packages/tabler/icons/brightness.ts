import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrightnessIcon],svg[tabler-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9-9v18m0-12l4.65-4.65M12 14.3l7.37-7.37M12 19.6l8.85-8.85"></svg:path>`,
})
export class TablerBrightnessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
