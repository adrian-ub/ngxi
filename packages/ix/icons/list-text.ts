import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixListTextIcon],svg[ix-list-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426.667 426.667v42.666H149.333v-42.666zm-85.334-64v42.666h-192v-42.666zm-234.666 0v42.666H64v-42.666zm320-85.334V320H149.333v-42.667zm-320-64V256H64v-42.667zm234.666 0V256h-192v-42.667zM426.667 128v42.667H149.333V128zm-320-64v42.667H64V64zm234.666 0v42.667h-192V64z"></svg:path>`,
})
export class IxListTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
