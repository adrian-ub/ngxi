import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyMinusIcon],svg[iconoir-key-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.992 18h6m-8.58-7.657a4 4 0 1 0 5.657-5.657a4 4 0 0 0-5.657 5.657m0 0l-8.485 8.485l2.121 2.122M6.755 16l2.122 2.121"></svg:path>`,
})
export class IconoirKeyMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
