import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLaptopIcon],svg[tdesign-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v15H1zm2 2v11h18V5zM0 19h24v2H0z"></svg:path>`,
})
export class TdesignLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
