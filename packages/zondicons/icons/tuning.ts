import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsTuningIcon],svg[zondicons-tuning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16v4h-2v-4h-2v-3h6v3zM1 9h6v3H1zm6-4h6v3H7zM3 0h2v8H3zm12 0h2v12h-2zM9 0h2v4H9zM3 12h2v8H3zm6-4h2v12H9z"></svg:path>`,
})
export class ZondiconsTuningIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
