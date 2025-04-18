import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixEditPlantFilledIcon],svg[ix-edit-plant-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M149.333 64v170.667l128-69.334v69.334l128-70.119v70.615L234.667 405.83v20.837H64V64zm260 197.333L464 316l-34.458 34.458l-54.666-54.667zm-49.542 49.543l54.667 54.666l-103.791 103.791H256v-54.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxEditPlantFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
