import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGoodHealthAndWellBeingIcon],svg[streamline-good-health-and-well-being-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m10.097 12.468l-2.773-2.52c-1.53-1.522.717-4.423 2.773-2.045c2.104-2.33 4.303.57 2.773 2.045z"></svg:path><svg:path d="M.621 6.088h1.367l1.823 3.19l4.101-7.747l1.823 3.646"></svg:path></svg:g>`,
})
export class StreamlineGoodHealthAndWellBeingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
