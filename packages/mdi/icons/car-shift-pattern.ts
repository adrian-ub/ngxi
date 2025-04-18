import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCarShiftPatternIcon],svg[mdi-car-shift-pattern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5H4V2h4zM4 22h4v-3H4zM14 2h-4v3h4zm-4 20h4v-3h-4zm6-20v3h4V2zm1 9h-4V7h-2v4H7V7H5v10h2v-4h4v4h2v-4h6V7h-2z"></svg:path>`,
})
export class MdiCarShiftPatternIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
