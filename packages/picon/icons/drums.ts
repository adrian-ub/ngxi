import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDrumsIcon],svg[picon-drums-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0H0l3 3h1m4-3H7L4 3h1m3 0c0-3-8-3-8 0v3c0 3 8 3 8 0M2 4Q0 3 2 2h4q2 1 0 2"></svg:path>`,
})
export class PiconDrumsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
