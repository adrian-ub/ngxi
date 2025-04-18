import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopDownLeftIcon],svg[pepicons-pop-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.707 16.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L4.414 12l3.293 3.293a1 1 0 0 1 0 1.414"></svg:path><svg:path d="M12.75 11c.595 0 1.166-.238 1.588-.663A2.28 2.28 0 0 0 15 8.727V3a1 1 0 1 1 2 0v5.727a4.3 4.3 0 0 1-1.242 3.02A4.24 4.24 0 0 1 12.75 13H3a1 1 0 1 1 0-2z"></svg:path></svg:g>`,
})
export class PepiconsPopDownLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
