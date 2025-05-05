import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAtomIcon],svg[picon-atom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 4l1-1l1 1l-1 1M3 5q-6-8 2-2q-6-4-2 2q6 4 2-2q6 8-2 2m2 0q-8 6-2-2q-4 6 2 2q4-6-2-2q8-6 2 2"></svg:path>`,
})
export class PiconAtomIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
