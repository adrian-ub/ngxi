import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhStickynotealtIcon],svg[whh-stickynotealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1023 576q0 48-34 82L658 989q-34 34-82 34v1H0V0h1024v576zM621 928l307-307q18-18 26-45H576v378q27-8 45-26M960 64H64v896h448V512h448z"></svg:path>`,
})
export class WhhStickynotealtIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
