import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBitkubIcon],svg[arcticons-bitkub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.753 24a2.778 2.778 0 1 1-.003-.142"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.188 35.672L4.517 24l11.671-11.672l8.163 8.163M29.247 24a2.778 2.778 0 1 1 .003.142"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.812 12.328L43.483 24l-11.67 11.672l-8.163-8.163"></svg:path>`,
})
export class ArcticonsBitkubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
