import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelCubeIcon],svg[raphael-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 3.03L4.7 9.263v12.47l10.8 6.237l10.8-6.234V9.266L15.5 3.028zm9.488 7.57L16 15.79v10.377c0 .275-.225.5-.5.5s-.5-.225-.5-.5v-10.38l-8.987-5.19a.499.499 0 1 1 .5-.865l8.988 5.19l8.99-5.19a.5.5 0 0 1 .683.184a.5.5 0 0 1-.185.683z"></svg:path>`,
})
export class RaphaelCubeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
