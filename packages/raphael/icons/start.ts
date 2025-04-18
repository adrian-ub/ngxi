import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelStartIcon],svg[raphael-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.316 5.318L9.833 13.682V5.5H5.5v20h4.333v-8.182l14.483 8.364z"></svg:path>`,
})
export class RaphaelStartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
