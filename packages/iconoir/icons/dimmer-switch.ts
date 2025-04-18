import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDimmerSwitchIcon],svg[iconoir-dimmer-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m3.5-10.5L12 12"></svg:path></svg:g>`,
})
export class IconoirDimmerSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
