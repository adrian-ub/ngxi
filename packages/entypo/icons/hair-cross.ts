import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoHairCrossIcon],svg[entypo-hair-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 .4C4.697.4.399 4.698.399 10A9.6 9.6 0 0 0 10 19.601c5.301 0 9.6-4.298 9.6-9.601c0-5.302-4.299-9.6-9.6-9.6m1 17.125V13H9v4.525A7.59 7.59 0 0 1 2.473 11H7V9H2.473A7.59 7.59 0 0 1 9 2.475V7h2V2.475A7.59 7.59 0 0 1 17.525 9H13v2h4.525A7.59 7.59 0 0 1 11 17.525"></svg:path>`,
})
export class EntypoHairCrossIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
