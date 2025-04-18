import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopKniveForkIcon],svg[pepicons-pop-knive-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11.27 5.506c0 1.942 1.063 3.308 3 3.994V11a1 1 0 1 0 2 0V1.5a1 1 0 0 0-1.442-.897c-2.316 1.141-3.558 2.8-3.558 4.903m2 0c0-.82.319-1.535 1-2.161v3.971c-.695-.411-1-.999-1-1.81" clip-rule="evenodd"></svg:path><svg:path d="M13.27 17.5v-5a2 2 0 1 1 4 0v5a2 2 0 0 1-4 0M3.283 2.45a1 1 0 1 1 1.998.1c-.08 1.603.002 2.682.2 3.158c.095.23.253.315.712.288a1 1 0 1 1 .114 1.997c-1.258.073-2.229-.446-2.674-1.519c-.343-.828-.444-2.142-.35-4.024"></svg:path><svg:path d="M10.717 2.45a1 1 0 1 0-1.998.1c.08 1.603-.002 2.682-.2 3.158c-.096.23-.253.315-.712.288a1 1 0 1 0-.115 1.997c1.258.073 2.23-.446 2.675-1.519c.343-.828.444-2.142.35-4.024"></svg:path><svg:path d="M6 2.5a1 1 0 0 1 2 0v9a1 1 0 1 1-2 0z"></svg:path><svg:path d="M5 17.5v-5a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0"></svg:path></svg:g>`,
})
export class PepiconsPopKniveForkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
