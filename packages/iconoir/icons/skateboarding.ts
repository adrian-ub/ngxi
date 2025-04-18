import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSkateboardingIcon],svg[iconoir-skateboarding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 19l2.333 1h9.334L19 19M8 22.01l.01-.011m7.99.011l.01-.011M7 7.834l3-1.5c2-1 4.27.567 4.27.567l-4.308 3.135L14 13.334v4m-4.451-3.989l-1.24.827H5M15.165 9.21h2.722M17 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class IconoirSkateboardingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
