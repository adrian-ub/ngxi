import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelFaveIcon],svg[raphael-fave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.132 7.97c-2.203-2.204-5.916-2.097-8.25.236l-.382.382l-.382-.382c-2.334-2.333-6.047-2.44-8.25-.235s-2.098 5.917.235 8.25l8.396 8.396l8.395-8.396c2.334-2.333 2.44-6.046.237-8.25z"></svg:path>`,
})
export class RaphaelFaveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
