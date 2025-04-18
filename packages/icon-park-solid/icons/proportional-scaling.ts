import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidProportionalScalingIcon],svg[icon-park-solid-proportional-scaling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSProportionalScaling0"><svg:g fill="none"><svg:g stroke="#fff" stroke-width="4" clip-path="url(#ipSProportionalScaling1)"><svg:path d="M22.268 7c.77-1.333 2.694-1.333 3.464 0l17.32 30c.77 1.333-.192 3-1.731 3H6.678c-1.54 0-2.501-1.667-1.732-3l17.32-30Z"></svg:path><svg:path stroke-linecap="round" d="m19 40l13-22m0 22l6-11"></svg:path></svg:g><svg:defs><svg:clippath id="ipSProportionalScaling1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSProportionalScaling0)"></svg:path>`,
})
export class IconParkSolidProportionalScalingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
