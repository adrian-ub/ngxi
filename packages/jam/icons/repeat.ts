import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamRepeatIcon],svg[jam-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.774 15l1.176 1.176a1 1 0 0 1-1.414 1.414l-2.829-2.828a1 1 0 0 1 0-1.414l2.829-2.829a1 1 0 0 1 1.414 1.415L11.883 13H14a4 4 0 1 0 0-8a1 1 0 0 1 0-2a6 6 0 1 1 0 12zM8.273 3L7.176 1.904A1 1 0 0 1 8.591.489l2.828 2.829a1 1 0 0 1 0 1.414L8.591 7.56a1 1 0 0 1-1.415-1.414L8.323 5H6a4 4 0 1 0 0 8a1 1 0 0 1 0 2A6 6 0 1 1 6 3z"></svg:path>`,
})
export class JamRepeatIcon {
  readonly viewBox = input("-2 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
