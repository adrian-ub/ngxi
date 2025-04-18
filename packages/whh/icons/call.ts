import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCallIcon],svg[whh-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m308 288l-88 87q18 65 95 160.5T487.5 708T649 803l87-87q15-15 53-12.5t76.5 12T929 737q56 27 82 66.5t3 61.5L907 972q-43 44-117 49.5t-160-23T448 908T265 759T115.5 575.5T24.5 393t-23-159.5T51 117L158 10q21-21 55 4.5T286 95q19 27 30 97t-8 96"></svg:path>`,
})
export class WhhCallIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
