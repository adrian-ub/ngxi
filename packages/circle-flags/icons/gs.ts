import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsGsIcon],svg[circle-flags-gs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsGs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsGs0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:rect width="64" height="32" x="336" y="256" fill="#6da544" rx="16" ry="16"></svg:rect><svg:circle cx="368" cy="96" r="32" fill="#ff9811"></svg:circle><svg:circle cx="368" cy="144" r="48" fill="#acabb1"></svg:circle><svg:path fill="#338af3" d="M320 144v77c0 36 48 48 48 48s48-12 48-48v-77z"></svg:path><svg:rect width="32" height="128" x="288" y="128" fill="#333" rx="16" ry="16"></svg:rect><svg:rect width="32" height="128" x="416" y="128" fill="#333" rx="16" ry="16"></svg:rect><svg:path fill="#6da544" d="m320 144l48 112l48-112z"></svg:path><svg:path fill="#ffda44" d="M288 288v32h32v8h96v-8h32v-32h-32v8h-96v-8z"></svg:path></svg:g>`,
})
export class CircleFlagsGsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
