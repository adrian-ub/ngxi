import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayPartOfCircle1Icon],svg[subway-part-of-circle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v512h512C512 229.2 282.8 0 0 0"></svg:path>`,
})
export class SubwayPartOfCircle1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
