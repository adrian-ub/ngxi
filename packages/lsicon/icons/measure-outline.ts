import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconMeasureOutlineIcon],svg[lsicon-measure-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m4.354 8.854l1.5 1.5m0-3l1.5 1.5m1.5-4.5l1.5 1.5m-3 0l1.5 1.5m2.328-4.657l2.121 2.121a.5.5 0 0 1 0 .707l-7.778 7.778a.5.5 0 0 1-.707 0l-2.121-2.121a.5.5 0 0 1 0-.707l7.778-7.778a.5.5 0 0 1 .707 0Z"></svg:path>`,
})
export class LsiconMeasureOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
