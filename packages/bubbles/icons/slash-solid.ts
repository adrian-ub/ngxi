import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesSlashSolidIcon],svg[bubbles-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.39.054h6.2v2.044H.39z"></svg:path>`,
})
export class BubblesSlashSolidIcon {
  readonly viewBox = input("0 0 7 3")
  readonly width = input("2.34em")
  readonly height = input("1em")
}
