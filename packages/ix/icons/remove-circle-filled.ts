import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixRemoveCircleFilledIcon],svg[ix-remove-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 470.507c-117.821 0-213.333-95.513-213.333-213.334S138.179 43.84 256 43.84s213.333 95.512 213.333 213.333S373.821 470.507 256 470.507m-106.667-192V235.84h213.334v42.667z" clip-rule="evenodd"></svg:path>`,
})
export class IxRemoveCircleFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
