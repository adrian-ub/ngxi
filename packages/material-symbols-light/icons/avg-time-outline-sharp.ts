import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAvgTimeOutlineSharpIcon],svg[material-symbols-light-avg-time-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.658 0-3.113-.626t-2.545-1.716t-1.716-2.546T4 13h1q0 2.9 2.05 4.95T12 20t4.95-2.05T19 13h1q0 1.658-.626 3.113t-1.716 2.545t-2.546 1.716T12 21m-8-8q0-1.658.626-3.113t1.716-2.545t2.546-1.716T12 5q1.454 0 2.812.52t2.492 1.469l1.092-1.093l.708.708l-1.092 1.092q.95 1.135 1.469 2.493T20 13h-1q0-2.9-2.05-4.95T12 6T7.05 8.05T5 13zM9.385 2.5v-1h5.23v1zM12 6Q9.234 6 7.217 7.879t-2.2 4.621h3.3l1.666 3.304L14 8l2.312 4.5h2.67q-.182-2.742-2.2-4.621Q14.767 6 12 6m0 14q2.766 0 4.783-1.879t2.2-4.621h-3.3l-1.666-3.304L10 18l-2.311-4.5H5.016q.183 2.742 2.2 4.621T12 20m0 0q-2.9 0-4.95-2.05T5 13t2.05-4.95T12 6t4.95 2.05T19 13t-2.05 4.95T12 20m0-7"></svg:path>`,
})
export class MaterialSymbolsLightAvgTimeOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
