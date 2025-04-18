import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlantFilledIcon],svg[ix-plant-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64v384h384V185.882L298.667 256v-69.333L149.333 256V64z"></svg:path>`,
})
export class IxPlantFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
