import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsShIcon],svg[circle-flags-sh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsSh0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsSh0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:path fill="#eee" d="M288 128h160v80l-80 32l-80-32z"></svg:path><svg:path fill="#333" d="M368 140a14 14 0 0 0-14 14h-42a14 14 0 0 0 14 14a14 14 0 0 0 14 14a14 14 0 0 0 14 14h28a14 14 0 0 0 14-14a14 14 0 0 0 14-14a14 14 0 0 0 14-14h-42a14 14 0 0 0-14-14"></svg:path><svg:path fill="#338af3" d="M288 208v48c0 61 80 80 80 80s80-19 80-80v-48z"></svg:path><svg:path fill="#eee" d="M372 221c-9 0-15 8-25 1c5 12 14 9 22 10v6h-14s-14 20 0 38h14v5h-14c-9 0-9-11-9-11h-34v11h7c9 8 13 26 27 26h52c15 0 17-9 20-17c3-7 5-8 6-9v-8h-29s0 8-8 8h-12v-6h14c-11-17 0-37 0-37h-14v-16l-4-1zm-23 17c-20 6-31 26-31 26h25c-2-17 6-26 6-26m44 6a34 34 0 0 0-2 23h24c-5-12 0-23 0-23z"></svg:path></svg:g>`,
})
export class CircleFlagsShIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
