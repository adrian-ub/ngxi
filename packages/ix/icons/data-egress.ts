import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDataEgressIcon],svg[ix-data-egress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m320 85.333l149.333 85.333v170.667L320 426.666l-149.333-85.333v-42.667h43.09l.001 18.006L320 377.386l106.22-60.714V195.306L320 134.592l-106.242 60.714v18.027h-43.091v-42.667zm-207.085 91.582l30.17 30.17l-27.573 27.58l225.821.001v42.667H115.512l27.573 27.582l-30.17 30.17L33.83 256z"></svg:path>`,
})
export class IxDataEgressIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
