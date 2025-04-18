import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhEventumIcon],svg[whh-eventum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1024V0h1024v1024zM960 64H64v896h896zM832 320H384v128h256v128H384v128h448v128H192V192h640z"></svg:path>`,
})
export class WhhEventumIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
