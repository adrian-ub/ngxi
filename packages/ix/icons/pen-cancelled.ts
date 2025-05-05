import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPenCancelledIcon],svg[ix-pen-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M333.159 242.841L226.503 136.163L320 42.666l106.667 106.667zM89.679 59.657L469.334 439.39v29.943H42.667v-42.666h353.83L272.915 303.085L192 384H85.333V277.333l80.915-80.915L59.583 89.753zm84.657 281.676l68.414-68.414l-46.336-46.336L128 294.997v46.336zM320 102.997l46.336 46.336l-40.083 40.083l-46.336-46.336z" clip-rule="evenodd"></svg:path>`,
})
export class IxPenCancelledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
