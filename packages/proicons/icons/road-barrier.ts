import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsRoadBarrierIcon],svg[proicons-road-barrier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5.75 15.25v6m0-18.5v3m12.5 9.5v6m0-18.5v3"></svg:path><svg:path d="M4.75 5.75a2 2 0 0 0-2 2v5.5a2 2 0 0 0 2 2h14.5a2 2 0 0 0 2-2v-5.5a2 2 0 0 0-2-2z"></svg:path><svg:path stroke-linecap="round" d="m8.917 5.75l-5.701 8.783M15.087 5.75l-6.167 9.5m6.17 0l5.698-8.778"></svg:path></svg:g>`,
})
export class ProiconsRoadBarrierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
