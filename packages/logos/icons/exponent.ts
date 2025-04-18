import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosExponentIcon],svg[logos-exponent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M94.104-.001L0 217.125l42.193 22.519L128 55.703l85.57 183.941L256 217.125L161.896-.001H94.104z" fill="#023C69"></svg:path>`,
})
export class LogosExponentIcon {
  readonly viewBox = input("0 0 256 240")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
