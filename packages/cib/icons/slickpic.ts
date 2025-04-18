import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibSlickpicIcon],svg[cib-slickpic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.645 24.412L8.073 18.781L11.432 6.51L32 12.139zM10.76 17.251l16.349 4.473l2.203-8.047l-16.353-4.48l-2.199 8.048zm.609 3.812l-6.52 1.744l-2.167-8.057l5.525-1.484l.667-2.443l-8.875 2.38L3.302 25.49l12.239-3.292z"></svg:path>`,
})
export class CibSlickpicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
