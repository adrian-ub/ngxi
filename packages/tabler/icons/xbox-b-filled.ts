import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerXboxBFilledIcon],svg[tabler-xbox-b-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m1 5h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3a3 3 0 0 0 2.235-5A3 3 0 0 0 13 7m0 6a1 1 0 0 1 1 1l-.007.117A1 1 0 0 1 13 15h-2v-2zm0-4a1 1 0 0 1 0 2h-2V9z"></svg:path>`,
})
export class TablerXboxBFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
