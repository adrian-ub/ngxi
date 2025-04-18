import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerXboxXFilledIcon],svg[tabler-xbox-x-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m3.6 5.2a1 1 0 0 0-1.4.2L12 10.333L9.8 7.4a1 1 0 1 0-1.6 1.2l2.55 3.4l-2.55 3.4a1 1 0 1 0 1.6 1.2l2.2-2.933l2.2 2.933a1 1 0 0 0 1.6-1.2L13.25 12l2.55-3.4a1 1 0 0 0-.2-1.4"></svg:path>`,
})
export class TablerXboxXFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
