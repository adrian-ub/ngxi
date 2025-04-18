import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsUnlinkVerticalIcon],svg[system-uicons-unlink-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.5 12.5v1a4 4 0 1 1-8 0v-1m0-4v-1a4 4 0 1 1 8 0v1"></svg:path>`,
})
export class SystemUiconsUnlinkVerticalIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
