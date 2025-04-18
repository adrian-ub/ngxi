import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisPreviousIcon],svg[uis-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.7 15.3L13.4 12l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-4 4c-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4M8 7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisPreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
