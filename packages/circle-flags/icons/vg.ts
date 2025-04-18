import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsVgIcon],svg[circle-flags-vg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsVg0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsVg0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#ffda44" d="m367.3 256l-69.2 69.2a77.9 77.9 0 0 0 138.4 0z"></svg:path><svg:path fill="#6da544" d="M289.4 133.6V256c0 59.6 77.9 78 77.9 78s78-18.4 78-78V133.6h-156z"></svg:path><svg:path fill="#ffda44" d="M311.7 155.8h22.2v22.3h-22.2zm0 50.1h22.2v22.3h-22.2zm0 50.1h22.2v22.3h-22.2zm89-100.2H423v22.3h-22.3zm0 50.1H423v22.3h-22.3zm0 50.1H423v22.3h-22.3z"></svg:path><svg:path fill="#eee" d="M0 0v32l32 32L0 96v160h32l32-32l32 32h32v-83l83 83h45l-8-16l8-15v-14l-83-83h83V96l-32-32l32-32V0H96L64 32L32 0Z"></svg:path><svg:path fill="#d80027" d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128l128 128v-31l-97-97z"></svg:path><svg:path fill="#eee" d="M350.6 189.2H384v89h-33.4z"></svg:path><svg:circle cx="367.3" cy="189.2" r="16.7" fill="#a2001d"></svg:circle></svg:g>`,
})
export class CircleFlagsVgIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
