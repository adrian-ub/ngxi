import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShieldCrossSolidIcon],svg[streamline-shield-cross-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4.927a9.4 9.4 0 0 1-6.635 8.984a1.24 1.24 0 0 1-.73 0A9.4 9.4 0 0 1 0 4.927V1.5A1.5 1.5 0 0 1 1.5 0h11A1.5 1.5 0 0 1 14 1.5zM5.6 2.908a.5.5 0 0 1 .5-.5h1.8a.5.5 0 0 1 .5.5v1.7h1.698a.5.5 0 0 1 .5.5v1.798a.5.5 0 0 1-.5.5H8.4v1.699a.5.5 0 0 1-.5.5H6.1a.5.5 0 0 1-.5-.5V7.406H3.901a.5.5 0 0 1-.5-.5V5.107a.5.5 0 0 1 .5-.5h1.7V2.908Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShieldCrossSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
