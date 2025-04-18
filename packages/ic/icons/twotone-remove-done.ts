import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneRemoveDoneIcon],svg[ic-twotone-remove-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.84 1.98L3.43 3.39l10.38 10.38l-1.41 1.41l-4.24-4.24l-1.41 1.41l5.66 5.66l2.83-2.83l6.6 6.6l1.41-1.41zm13.21 10.38L23 7.4L21.57 6l-4.94 4.94zm-.71-4.96l-1.41-1.41l-2.12 2.12l1.41 1.41zM1.08 12.35l5.66 5.66l1.41-1.41l-5.66-5.66z"></svg:path>`,
})
export class IcTwotoneRemoveDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
