import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psBlipIcon],svg[ps-blip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 408l33-34v-53l108 108H90l-34 33zm27-260v83q84 0 145 59q59 59 59 145h83q0-118-84.5-202.5T29 148M29 2v82q144 0 247 103.5T379 435h83q0-88-34.5-168T335 129T197 36.5T29 2"></svg:path>`,
})
export class PsBlipIcon {
  readonly viewBox = input("0 0 464 488")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
