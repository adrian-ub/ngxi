import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riEmpathizeFillIcon],svg[ri-empathize-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.364 10.98a4 4 0 0 1 0 5.656l-5.657 5.657a1 1 0 0 1-1.414 0l-5.657-5.657a4 4 0 1 1 5.657-5.657l.707.707l.707-.707a4 4 0 0 1 5.657 0M12 1a4 4 0 1 1 0 8a4 4 0 0 1 0-8"></svg:path>`,
})
export class RiEmpathizeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
