import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOfflineNotepadIcon],svg[arcticons-offline-notepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.907 11.268H6.347c-1.02 0-1.847.784-1.847 1.75v28.867c0 .966.827 1.75 1.847 1.75h30.481c1.02 0 1.848-.784 1.848-1.75V19.6m1.927-8.004a3.064 3.064 0 0 0-4.333-4.333l-2.586 2.586l4.332 4.333z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.016 14.182l-18.798 18.8l-6.704 2.37l2.371-6.704L33.684 9.85"></svg:path>`,
})
export class ArcticonsOfflineNotepadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
