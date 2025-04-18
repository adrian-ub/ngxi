import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceRampDownArrowIcon],svg[guidance-ramp-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1 23h22v-1C9 18.772 1.5 13 1.5 13H1zm22.5-8.746L11 7m12.5 7.254c-.498-.29-.944-.95-1.274-1.559a8 8 0 0 1-.856-2.622c-.106-.712-.155-1.514.068-1.902m2.062 6.083c-.498-.29-1.29-.348-1.98-.33a7.9 7.9 0 0 0-2.687.566c-.667.263-1.382.622-1.605 1.01"></svg:path>`,
})
export class GuidanceRampDownArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
