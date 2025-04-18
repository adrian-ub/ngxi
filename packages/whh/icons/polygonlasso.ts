import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPolygonlassoIcon],svg[whh-polygonlasso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.308 506l-377 250q-6 29-26.5 49.5t-48.5 25.5l-119 178q-7 12-19.5 15.5t-24-3t-15-20t2.5-25.5l106-157q-46-28-46-82q0-20 9-40l-447-448q-10-10-10-23q0-15 10-25l126-190q16-16 37-7l1 1l497 183l296-177q16-16 37-7q13 5 18 18q2 6 2 14v445q1 15-9 25m-319-258q-16 16-37 7v-1h-1l-487-179l-96 146l429 430q19-10 40-10q53 0 81 46l335-223V91z"></svg:path>`,
})
export class WhhPolygonlassoIcon {
  readonly viewBox = input("0 0 1025 1026")
  readonly width = input("1em")
  readonly height = input("1em")
}
