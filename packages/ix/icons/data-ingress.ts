import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDataIngressIcon],svg[ix-data-ingress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m320 85.333l149.333 85.333v170.667L320 426.666l-149.333-85.333v-42.667h43.09l.001 18.006L320 377.386l106.22-60.714V195.306L320 134.592l-106.242 60.714v18.027h-43.091v-42.667zm-27.582 91.582L371.503 256l-79.085 79.085l-30.17-30.17l27.571-27.582H64v-42.667h225.82l-27.572-27.581z"></svg:path>`,
})
export class IxDataIngressIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
