import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceEscalatorUpArrowIcon],svg[guidance-escalator-up-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m10.5.5l-10 10m10-10c-.398.398-1.133.654-1.79.812c-.878.212-1.79.25-2.687.149c-.697-.08-1.464-.235-1.773-.544M10.5.5c-.398.398-.654 1.133-.812 1.79a7.8 7.8 0 0 0-.149 2.687c.08.697.235 1.464.544 1.773M5.515 23.5H.5v-6H6l8.243-8.243A6 6 0 0 1 18.485 7.5H23.5v6H18l-8.243 8.243A6 6 0 0 1 5.515 23.5Z"></svg:path>`,
})
export class GuidanceEscalatorUpArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
