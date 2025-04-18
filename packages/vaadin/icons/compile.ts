import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCompileIcon],svg[vaadin-compile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12h4v4H1zm5 0h4v4H6zm5 0h4v4h-4zM1 7h4v4H1zm0-5h4v4H1zm5 5h4v4H6zm1-6h4v4H7zm4 6h4v4h-4zm2-7h3v3h-3z"></svg:path>`,
})
export class VaadinCompileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
