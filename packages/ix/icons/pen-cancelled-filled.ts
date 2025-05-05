import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPenCancelledFilledIcon],svg[ix-pen-cancelled-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m89.68 59.657l379.653 379.734v29.943H42.667v-42.667h353.83L267.582 297.752L181.333 384h-96v-96l86.249-86.248L59.583 89.753zm161.634 62.363l96 96L416 149.333l-96-96z" clip-rule="evenodd"></svg:path>`,
})
export class IxPenCancelledFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
