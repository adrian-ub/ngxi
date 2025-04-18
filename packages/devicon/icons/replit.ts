import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconReplitIcon],svg[devicon-replit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F26207" d="M11 8c0-2.122.845-4.157 2.35-5.657A8.04 8.04 0 0 1 19.026 0h37.45a8.04 8.04 0 0 1 5.675 2.343A8 8 0 0 1 64.5 8v34.667H19.025a8.04 8.04 0 0 1-5.674-2.343A8 8 0 0 1 11 34.666zm53.5 34.667h45.475a8.04 8.04 0 0 1 5.675 2.343a8 8 0 0 1 2.35 5.657v26.666a8 8 0 0 1-2.35 5.657a8.04 8.04 0 0 1-5.675 2.343H64.5zM11 93.333c0-2.121.845-4.156 2.35-5.656a8.04 8.04 0 0 1 5.675-2.344H64.5V120a8 8 0 0 1-2.35 5.657A8.04 8.04 0 0 1 56.475 128h-37.45a8.04 8.04 0 0 1-5.674-2.343A8 8 0 0 1 11 120z"></svg:path>`,
})
export class DeviconReplitIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
