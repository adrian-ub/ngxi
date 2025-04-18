import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiExpandLeftIcon],svg[oi-expand-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v8h1V0zm6 0v8h2V0zM2 2v4l2-2z"></svg:path>`,
})
export class OiExpandLeftIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
