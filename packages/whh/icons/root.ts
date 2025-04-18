import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRootIcon],svg[whh-root-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M961 128H622L319 977q-7 25-30 38.5t-49 6.5q-18-5-30-18t-15-30L3 463q-7-25 6.5-47.5t39-29T97 393t29 38l122 366L514 52q5-22 22.5-37T577 0h384q27 0 45.5 19t18.5 45.5t-18.5 45T961 128"></svg:path>`,
})
export class WhhRootIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
