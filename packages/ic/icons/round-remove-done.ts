import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundRemoveDoneIcon],svg[ic-round-remove-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.14 2.69a.996.996 0 0 0 0 1.41l9.67 9.67l-1.41 1.41l-3.54-3.53a.996.996 0 1 0-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l2.12-2.12l5.89 5.89a.996.996 0 1 0 1.41-1.41L5.55 2.69a.996.996 0 0 0-1.41 0m13.91 9.67l4.24-4.24a1 1 0 0 0-.01-1.42c-.39-.38-1.02-.38-1.41.01l-4.24 4.24zM16.64 6.7a.996.996 0 0 0-1.41 0l-1.42 1.42l1.41 1.41l1.42-1.42a.996.996 0 0 0 0-1.41M1.79 13.06l4.95 4.95l1.41-1.41l-4.95-4.95a.996.996 0 1 0-1.41 1.41"></svg:path>`,
})
export class IcRoundRemoveDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
