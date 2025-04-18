import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsArrowRedoIcon],svg[proicons-arrow-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.03 21.25l-8.26-8.26a5.999 5.999 0 0 1 8.483-8.483l4.734 4.734l.622.622m-7.199.505h6.077c.447 0 .848-.195 1.122-.505m.378-7.072v6.077c0 .382-.142.73-.378.995"></svg:path>`,
})
export class ProiconsArrowRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
