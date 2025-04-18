import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowExpandIcon],svg[ion-arrow-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M274 209.7l63.9-63.8L288 96h128v128l-49.9-49.9-63.8 63.9z" fill="currentColor"></svg:path><svg:path d="M274 302.3l63.9 63.8L288 416h128V288l-49.9 49.9-63.8-63.9z" fill="currentColor"></svg:path><svg:path d="M238 302.3l-63.9 63.8L224 416H96V288l49.9 49.9 63.8-63.9z" fill="currentColor"></svg:path><svg:path d="M238 209.7l-63.9-63.8L224 96H96v128l49.9-49.9 63.8 63.9z" fill="currentColor"></svg:path>`,
})
export class IonArrowExpandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
