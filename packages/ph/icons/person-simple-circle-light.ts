import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleCircleLightIcon],svg[ph-person-simple-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90M114 80a14 14 0 1 1 14 14a14 14 0 0 1-14-14m68 32a6 6 0 0 1-6 6h-42v16.18l31 46.49a6 6 0 1 1-10 6.66l-27-40.51l-27 40.51a6 6 0 1 1-10-6.66l31-46.49V118H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhPersonSimpleCircleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
