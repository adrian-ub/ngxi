import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsGoodIcon],svg[ls-good-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M505 572v37h109v70H243l-59-45V315s82-61 118-136c36-76 34-164 34-164h94s4 72 0 129c-5 58-24 129-24 129h260v82H505v37h161v73H505v36h130v71zM0 629h142V321H0z"></svg:path>`,
})
export class LsGoodIcon {
  readonly viewBox = input("0 0 666 679")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
