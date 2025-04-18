import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhOrigamiIcon],svg[whh-origami-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 384L704 704L256 832l-128-64L0 832l128-192l128 64l77-51l79-185L256 0l256 128l95 237l289-173l128 192z"></svg:path>`,
})
export class WhhOrigamiIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}
