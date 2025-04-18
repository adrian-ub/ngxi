import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsFkIcon],svg[circle-flags-fk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsFk0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsFk0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:path fill="#ffda44" d="M411.8 300.5v11.2h-89v-11.2h-33.4V345h22.3v11.2H423V345h22.2v-44.5z"></svg:path><svg:path fill="#338af3" d="M289.4 133.6V256c0 59.6 77.9 78 77.9 78s78-18.4 78-78V133.6h-156z"></svg:path><svg:path fill="#eee" d="M367.3 224.9c-19.5 0-19.5 17.8-39 17.8s-19.4-17.8-39-17.8V256c19.6 0 19.6 17.8 39 17.8s19.5-17.8 39-17.8s19.5 17.8 39 17.8s19.4-17.8 39-17.8v-31.2c-19.6 0-19.6 17.8-39 17.8c-19.5 0-19.5-17.8-39-17.8zm0-62.4c-19.5 0-19.5 17.8-39 17.8s-19.4-17.8-39-17.8v31.2c19.6 0 19.6 17.8 39 17.8s19.5-17.8 39-17.8s19.5 17.8 39 17.8s19.4-17.8 39-17.8v-31.2c-19.6 0-19.6 17.8-39 17.8c-19.5 0-19.5-17.8-39-17.8"></svg:path></svg:g>`,
})
export class CircleFlagsFkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
