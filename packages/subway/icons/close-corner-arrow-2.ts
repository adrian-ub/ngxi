import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayCloseCornerArrow2Icon],svg[subway-close-corner-arrow-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.7 0v128L42.7 0L0 42.7l128 128H0l64 64l170.8.1l-.1-170.8zM512 341.3l-64-64l-170.8-.1l.1 170.8l64 64V384l128 128l42.7-42.7l-128-128z"></svg:path>`,
})
export class SubwayCloseCornerArrow2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
