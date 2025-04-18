import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayButtonOIcon],svg[gg-play-button-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0 2c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11" clip-rule="evenodd"></svg:path><svg:path d="m16 12l-6 4.33V7.67z"></svg:path></svg:g>`,
})
export class GgPlayButtonOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
