import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelArrowleft2Icon],svg[raphael-arrowleft2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.87 9.814L15.685 16l6.187 6.188l-3.535 3.537L8.612 16l9.723-9.724z"></svg:path>`,
})
export class RaphaelArrowleft2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
