import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPackingBoxFilledIcon],svg[lsicon-packing-box-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.793 1.128a.5.5 0 0 1 .414 0l6.417 2.917a.5.5 0 0 1 .293.455v6.417a.5.5 0 0 1-.26.439l-6.417 3.5a.5.5 0 0 1-.48 0l-6.416-3.5a.5.5 0 0 1-.26-.44V4.5a.5.5 0 0 1 .293-.455zm.707 6.61v5.836l5.417-2.954V5.277zM13.21 4.5L8 6.867l-1.894-.86l4.96-2.48zM9.895 2.994l-4.96 2.48L2.791 4.5L8 2.133z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPackingBoxFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
