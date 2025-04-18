import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWidgetsIcon],svg[zmdi-widgets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 245h171v171H213zM0 416V245h171v171zM0 32h171v171H0zM291 4l121 121l-121 120l-120-120z"></svg:path>`,
})
export class ZmdiWidgetsIcon {
  readonly viewBox = input("0 0 416 416")
  readonly width = input("1em")
  readonly height = input("1em")
}
