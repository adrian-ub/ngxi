import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsDoorOpenIcon],svg[vs-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 200H0v1600h400v200l800-200V200L400 0zM100 300h300v1400H100zm479 779q-24 0-43.5-25T516 995t19.5-59.5T579 910t43 25t19 60q0 34-19 59t-43 25"></svg:path>`,
})
export class VsDoorOpenIcon {
  readonly viewBox = input("0 0 1216 2016")
  readonly width = input("0.61em")
  readonly height = input("1em")
}
