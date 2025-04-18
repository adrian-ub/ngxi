import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSeesawIcon],svg[mdi-seesaw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.68 13.26l.36 1.97l-19.69 3.54L2 16.8l2.95-.53l-.35-1.97c-.1-.54.26-1.06.81-1.16c.54-.1 1.06.26 1.16.81l.35 1.96l9.84-1.76l-.35-1.97c-.1-.55.26-1.07.81-1.18c.54-.08 1.06.28 1.16.82l.35 1.97zM10.06 18.4L8 22h8l-2.42-4.23z"></svg:path>`,
})
export class MdiSeesawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
