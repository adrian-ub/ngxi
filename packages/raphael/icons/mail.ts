import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelMailIcon],svg[raphael-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.516 7.167H3.482L16 14.275zM16.74 17.303a1.5 1.5 0 0 1-1.48 0L2.5 10.06v14.773h27V10.06z"></svg:path>`,
})
export class RaphaelMailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
