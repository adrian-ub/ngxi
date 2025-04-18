import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibMarketoIcon],svg[cib-marketo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.527 0v32l8.181-6.516V4.448zm-3.803 25.011l-6.584 2.875V2.782l6.584 1.948zm-15.427-.74l5.036-1.328V6.918L2.317 6.11z"></svg:path>`,
})
export class CibMarketoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
