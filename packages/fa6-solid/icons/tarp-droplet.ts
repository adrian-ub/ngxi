import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidTarpDropletIcon],svg[fa6-solid-tarp-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 160c-35.3 0-64-26.9-64-60c0-24 33.7-70.1 52.2-93.5c6.1-7.7 17.5-7.7 23.6 0C318.3 29.9 352 76 352 100c0 33.1-28.7 60-64 60M64 128h133.5c13.2 37.3 48.7 64 90.5 64s77.4-26.7 90.5-64H512c35.3 0 64 28.7 64 64v160H448c-17.7 0-32 14.3-32 32v128H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64m384 384V384h128zM96 256a32 32 0 1 0 0-64a32 32 0 1 0 0 64"></svg:path>`,
})
export class Fa6SolidTarpDropletIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
