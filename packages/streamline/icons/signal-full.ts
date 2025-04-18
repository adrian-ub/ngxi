import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSignalFullIcon],svg[streamline-signal-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.75 7.5H.5v6h4.25m4.5-9h-4.5v9h4.5M13.5.5H9.25v13h4.25z"></svg:path>`,
})
export class StreamlineSignalFullIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
