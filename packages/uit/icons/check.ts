import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitCheckIcon],svg[uit-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.353 7.574a.5.5 0 0 0-.707-.008L9.84 15.373l-3.487-3.486a.5.5 0 0 0-.707.707l3.84 3.84a.5.5 0 0 0 .707 0l8.16-8.16a.5.5 0 0 0 0-.7"></svg:path>`,
})
export class UitCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
