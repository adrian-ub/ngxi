import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggKeyholeIcon],svg[gg-keyhole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 12.83a3.001 3.001 0 1 0-2 0V16a1 1 0 1 0 2 0zM11 10a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path><svg:path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 1 0 16 0a8 8 0 0 0-16 0"></svg:path></svg:g>`,
})
export class GgKeyholeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
