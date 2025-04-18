import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsFilterCrossed16Icon],svg[qlementine-icons-filter-crossed-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.6 2.55A.996.996 0 0 1 2.432 1h11.1c.799 0 1.28.89.832 1.55l-.766 1.15l-1.94 1.11L13.538 2h-11.1l3.91 5.87l-.87.497l-3.87-5.81zM6 12.7v1.35a.5.5 0 0 0 .276.447l3 1.5a.5.5 0 0 0 .723-.447v-5.13l-1 .571v3.75l-2-1v-1.61l-1 .571zm9.7-7.77a.5.5 0 1 0-.496-.868l-14 8a.5.5 0 1 0 .496.868z"></svg:path>`,
})
export class QlementineIconsFilterCrossed16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
