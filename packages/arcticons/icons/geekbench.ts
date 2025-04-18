import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGeekbenchIcon],svg[arcticons-geekbench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.835 10.629h4.457v26.743h-4.457zm-7.8 4.795h4.457v21.947h-4.457zm-14.527-4.795h4.457v26.743h-4.457zm-7.8 9.763h4.457v16.98H6.708zm34.584 12.934H43.5m-10.008 0h3.343m-17.87 0h10.07m-17.87 0h3.343m-10.008 0h2.208M41.292 13.56H43.5m-24.535 0h17.87m-32.335 0h10.008m26.784 9.883H43.5m-10.008 0h3.343m-17.87 0h10.07m-17.87 0h3.343m-10.008 0h2.208"></svg:path>`,
})
export class ArcticonsGeekbenchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
