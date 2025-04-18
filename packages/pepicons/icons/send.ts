import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsSendIcon],svg[pepicons-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1.685 6.659c-.926.309-.906 1.626.03 1.906l7.493 2.242l2.447 7.71c.293.922 1.596.932 1.902.013L18.86 2.62a1 1 0 0 0-1.265-1.265L1.685 6.66Zm3.633.897l11.012-3.67l-3.698 11.096l-1.677-5.284a1 1 0 0 0-.667-.655l-4.97-1.487Z" clip-rule="evenodd"></svg:path><svg:path d="m17.767 1.44l1.044 1.077l-8.828 8.543l-1.044-1.077l8.828-8.543Z"></svg:path></svg:g>`,
})
export class PepiconsSendIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
