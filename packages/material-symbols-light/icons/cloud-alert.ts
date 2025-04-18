import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCloudAlertIcon],svg[material-symbols-light-cloud-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 19q-1.871 0-3.185-1.301Q2 16.397 2 14.516q0-1.71 1.175-3.047t2.921-1.435q.337-2.185 2.01-3.61T12 5q2.507 0 4.254 1.747Q18 8.493 18 11v1h.616q1.436.046 2.41 1.055T22 15.5q0 1.471-1.014 2.486Q19.97 19 18.5 19zm5.5-4.02q.214 0 .357-.143q.143-.144.143-.357t-.144-.356t-.357-.143t-.356.144t-.143.357t.144.356t.357.143m-.501-2.5h1V8.5h-1z"></svg:path>`,
})
export class MaterialSymbolsLightCloudAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
