import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faMusicIcon],svg[fa-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 96v1120q0 50-34 89t-86 60.5t-103.5 32t-96.5 10.5t-96.5-10.5t-103.5-32t-86-60.5t-34-89t34-89t86-60.5t103.5-32t96.5-10.5q105 0 192 39V526L640 763v709q0 50-34 89t-86 60.5t-103.5 32T320 1664t-96.5-10.5t-103.5-32t-86-60.5t-34-89t34-89t86-60.5t103.5-32T320 1280q105 0 192 39V352q0-31 19-56.5t49-35.5L1412 4q12-4 28-4q40 0 68 28t28 68"></svg:path>`,
})
export class FaMusicIcon {
  readonly viewBox = input("0 0 1536 1664")
  readonly width = input("0.93em")
  readonly height = input("1em")
}
