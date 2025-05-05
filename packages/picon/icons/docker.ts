import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDockerIcon],svg[picon-docker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5c1 3-8 5-7-1h6l2-2v3M4 3.5V2h2v1.5M2 2V.5h2V2M0 3.5V2h2v1.5M2 5v1h1V5"></svg:path>`,
})
export class PiconDockerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
