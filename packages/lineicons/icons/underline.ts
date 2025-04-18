import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsUnderlineIcon],svg[lineicons-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2.75a.75.75 0 0 0-1.5 0v8.75a7.5 7.5 0 0 0 15 0V2.75a.75.75 0 0 0-1.5 0v8.75a6 6 0 0 1-12 0zM5.75 20.5a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class LineiconsUnderlineIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
