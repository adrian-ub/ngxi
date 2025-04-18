import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTrafficLightIcon],svg[fa6-solid-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64v288c0 88.4 71.6 160 160 160s160-71.6 160-160V64c0-35.3-28.7-64-64-64zm96 416a48 48 0 1 1 0-96a48 48 0 1 1 0 96m48-176a48 48 0 1 1-96 0a48 48 0 1 1 96 0m-48-80a48 48 0 1 1 0-96a48 48 0 1 1 0 96"></svg:path>`,
})
export class Fa6SolidTrafficLightIcon {
  readonly viewBox = input("0 0 320 512")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
