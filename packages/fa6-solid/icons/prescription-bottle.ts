import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidPrescriptionBottleIcon],svg[fa6-solid-prescription-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 32C0 14.3 14.3 0 32 0h320c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64zm32 96h320v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64v-32h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H32v-64h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H32v-64h112c8.8 0 16-7.2 16-16s-7.2-16-16-16H32z"></svg:path>`,
})
export class Fa6SolidPrescriptionBottleIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
