import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTaIcon],svg[circle-flags-ta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTa0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:path fill="#eee" d="M288 288v32h32v8h96v-8h32v-32h-32v8h-96v-8zm32-144l48-80l48 80z"></svg:path><svg:circle cx="368" cy="144" r="48" fill="#338af3"></svg:circle><svg:path fill="#338af3" d="M320 144v48l48 32l48-32v-48z"></svg:path><svg:rect width="32" height="128" x="288" y="128" fill="#ff9811" rx="16" ry="16"></svg:rect><svg:rect width="32" height="128" x="416" y="128" fill="#ff9811" rx="16" ry="16"></svg:rect><svg:path fill="#eee" d="M320 192v29c0 36 48 48 48 48s48-12 48-48v-29zm48-48l-16 48h32z"></svg:path><svg:path fill="#338af3" d="m352 192l16 48l16-48z"></svg:path></svg:g>`,
})
export class CircleFlagsTaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
