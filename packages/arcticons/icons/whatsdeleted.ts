import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWhatsdeletedIcon],svg[arcticons-whatsdeleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.275 13.707h25.45V39.94a3.56 3.56 0 0 1-3.56 3.56h-18.33a3.56 3.56 0 0 1-3.56-3.56zm19.678-6.138l-.89-3.069H17.937l-.89 3.069H9.328v6.138h29.344V7.569z"></svg:path>`,
})
export class ArcticonsWhatsdeletedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
