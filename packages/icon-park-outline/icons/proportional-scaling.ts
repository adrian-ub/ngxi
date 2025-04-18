import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineProportionalScalingIcon],svg[icon-park-outline-proportional-scaling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M22.268 7c.77-1.333 2.694-1.333 3.464 0l17.32 30c.77 1.333-.192 3-1.731 3H6.679c-1.54 0-2.501-1.667-1.732-3z"></svg:path><svg:path stroke-linecap="round" d="m19 40l13-22m0 22l6-11"></svg:path></svg:g>`,
})
export class IconParkOutlineProportionalScalingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
