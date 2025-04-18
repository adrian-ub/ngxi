import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibFlutterIcon],svg[cib-flutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.083 0L3.068 16L8 20.932L28.912.016h-9.808zm.021 14.76l-8.631 8.609L19.104 32h9.828l-8.615-8.625l8.615-8.615z"></svg:path>`,
})
export class CibFlutterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
