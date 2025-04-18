import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopKniveForkCircleIcon],svg[pepicons-pop-knive-fork-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.27 8.506c0 1.942 1.063 3.308 3 3.994V14a1 1 0 1 0 2 0V4.5a1 1 0 0 0-1.442-.897c-2.316 1.141-3.558 2.799-3.558 4.903m2 0c0-.82.319-1.535 1-2.161v3.971c-.695-.411-1-.999-1-1.81" clip-rule="evenodd"></svg:path><svg:path d="M16.27 20.5v-5a2 2 0 1 1 4 0v5a2 2 0 0 1-4 0M6.283 5.45a1 1 0 1 1 1.998.1c-.08 1.603.002 2.682.2 3.158c.095.23.253.315.712.288a1 1 0 1 1 .114 1.997c-1.258.073-2.229-.446-2.674-1.519c-.343-.828-.444-2.142-.35-4.024"></svg:path><svg:path d="M13.717 5.45a1 1 0 1 0-1.998.1c.08 1.603-.002 2.682-.2 3.158c-.096.23-.253.315-.712.288a1 1 0 1 0-.115 1.997c1.258.073 2.23-.446 2.675-1.519c.343-.828.444-2.142.35-4.024"></svg:path><svg:path d="M9 5.5a1 1 0 0 1 2 0v9a1 1 0 1 1-2 0z"></svg:path><svg:path d="M8 20.5v-5a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopKniveForkCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
