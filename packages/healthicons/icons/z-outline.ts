import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsZOutlineIcon],svg[healthicons-z-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 9h20a3 3 0 0 1 2.717 1.727l-.906.425l.906-.425a3 3 0 0 1-.412 3.194L20.405 33H34a3 3 0 0 1 0 6H14a3 3 0 0 1-2.717-1.727l.903-.423l-.903.422a3 3 0 0 1 .412-3.192L27.595 15H14a3 3 0 0 1 0-6m20 2H14a1 1 0 0 0 0 2h15.73a1 1 0 0 1 .768 1.64L13.232 35.36A1 1 0 0 0 14 37h20a1 1 0 1 0 0-2H18.27a1 1 0 0 1-.768-1.64l17.266-20.72A1 1 0 0 0 34 11" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsZOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
