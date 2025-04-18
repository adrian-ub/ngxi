import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAuSaIcon],svg[circle-flags-au-sa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAuSa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAuSa0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:circle cx="382" cy="256" r="74" fill="#ff9811"></svg:circle><svg:path fill="#333" d="M382 228a14 14 0 0 0-14 14h-42a14 14 0 0 0 14 14a14 14 0 0 0 14 14a14 14 0 0 0 14 14h28a14 14 0 0 0 14-14a14 14 0 0 0 14-14a14 14 0 0 0 14-14h-42a14 14 0 0 0-14-14"></svg:path></svg:g>`,
})
export class CircleFlagsAuSaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
