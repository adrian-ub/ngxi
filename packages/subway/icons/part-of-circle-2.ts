import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayPartOfCircle2Icon],svg[subway-part-of-circle-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M119.5 0v299.9L331.6 512c54.3-54.3 87.8-129.2 87.8-212.1C419.5 134.3 285.2 0 119.5 0"></svg:path>`,
})
export class SubwayPartOfCircle2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
