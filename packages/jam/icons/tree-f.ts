import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTreeFIcon],svg[jam-tree-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13.758v6.1a1 1 0 0 1-2 0v-6.1A5 5 0 0 1 2.118 4.77a5.002 5.002 0 0 1 9.764 0A5 5 0 0 1 8 13.758"></svg:path>`,
})
export class JamTreeFIcon {
  readonly viewBox = input("-5 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
