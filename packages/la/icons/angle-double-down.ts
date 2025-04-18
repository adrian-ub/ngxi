import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laAngleDoubleDownIcon],svg[la-angle-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.219 6.688L3.78 8.094L16 20.313l12.219-12.22l-1.438-1.405L16 17.468zm0 7L3.78 15.094L16 27.313l12.219-12.22l-1.438-1.405L16 24.468z"></svg:path>`,
})
export class LaAngleDoubleDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
