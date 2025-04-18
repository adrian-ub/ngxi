import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarGolfBoldDuotoneIcon],svg[solar-golf-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="12" cy="18.5" fill="currentColor" opacity=".5" rx="10" ry="3.5"></svg:ellipse><svg:path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v1.036l5.008 2.504l.054.027c.734.367 1.36.68 1.796.984c.442.309.906.757.906 1.449s-.464 1.14-.906 1.449c-.436.304-1.062.617-1.796.984l-5.062 2.53V18a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarGolfBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
