import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCodeIcon],svg[la-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 5l-6 22h2l6-22zM7.937 6.406l-6.75 9L.75 16l.438.594l6.75 9l1.625-1.188L3.25 16l6.313-8.406zm16.125 0l-1.625 1.188L28.75 16l-6.313 8.406l1.625 1.188l6.75-9L31.25 16l-.438-.594z"></svg:path>`,
})
export class LaCodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
