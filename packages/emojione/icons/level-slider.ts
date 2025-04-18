import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLevelSliderIcon],svg[emojione-level-slider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#333" d="M14 4.5v55c0 3.4 6 3.4 6 0v-55c0-3.3-6-3.3-6 0"></svg:path><svg:path fill="#6d7275" d="M6.6 42h20.8c2.5 0 4.6-2.3 4.6-5s-2.1-5-4.6-5H6.6C4.1 32 2 34.3 2 37s2.1 5 4.6 5"></svg:path><svg:path fill="#94989b" d="M6.9 39.6h20.2c2.4 0 4.5-1.7 4.5-3.8s-2-3.8-4.5-3.8H6.9c-2.4 0-4.5 1.7-4.5 3.8s2 3.8 4.5 3.8"></svg:path><svg:path fill="#5b636b" d="M59 10H39c-4 0-4-6 0-6h20c4 0 4 6 0 6m-2 10H39c-4 0-4-6 0-6h18c4 0 4 6 0 6m-2 10H39c-4 0-4-6 0-6h16c4 0 4 6 0 6"></svg:path><svg:path fill="#c7e755" d="M53 40H39c-4 0-4-6 0-6h14c4 0 4 6 0 6m-2 10H39c-4 0-4-6 0-6h12c4 0 4 6 0 6m-2 10H39c-4 0-4-6 0-6h10c4 0 4 6 0 6"></svg:path>`,
})
export class EmojioneLevelSliderIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
