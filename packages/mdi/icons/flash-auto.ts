import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlashAutoIcon],svg[mdi-flash-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.85 7.65L18 4l1.15 3.65M19 2h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9M3 2v12h3v9l7-12H9l4-9z"></svg:path>`,
})
export class MdiFlashAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
