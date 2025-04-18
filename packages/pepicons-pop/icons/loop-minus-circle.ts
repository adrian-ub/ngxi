import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopLoopMinusCircleIcon],svg[pepicons-pop-loop-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.828 7.828a6 6 0 1 0 8.486 8.486a6 6 0 0 0-8.486-8.486M14.9 14.9a4 4 0 1 1-5.656-5.656A4 4 0 0 1 14.9 14.9" clip-rule="evenodd"></svg:path><svg:path d="M14.9 17.728a1.5 1.5 0 1 1 2.12-2.121l3.536 3.535a1.5 1.5 0 1 1-2.121 2.121zm-5.193-4.814a1 1 0 1 1 0-2h4.485a1 1 0 1 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopLoopMinusCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
