import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPlantUserFilledIcon],svg[ix-plant-user-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M381.334 277.333c47.128 0 85.603 37.72 87.892 85.128l.108 4.472v59.733H234.667v-59.733c0-47.985 37.047-87.16 83.608-89.49l4.392-.11zm-296-192V192l85.333-42.667V192L256 149.333v149.333H42.667V85.333zm266.666 64c29.456 0 53.334 23.878 53.334 53.333C405.334 232.122 381.456 256 352 256c-29.455 0-53.333-23.878-53.333-53.334c0-29.455 23.878-53.333 53.333-53.333"></svg:path>`,
})
export class IxPlantUserFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
