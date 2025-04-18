import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsLungs24pxIcon],svg[healthicons-lungs-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13.414v3.659a2.5 2.5 0 0 0 1.864 2.418l3.092.813c1.936.51 3.656-1.35 2.997-3.24L18.816 8.07A2.477 2.477 0 0 0 14 8.885v1.7l-1-1V4h-2v5.586l-1 1v-1.7a2.477 2.477 0 0 0-4.816-.816l-3.137 8.993c-.659 1.89 1.06 3.75 2.997 3.241l3.092-.813A2.5 2.5 0 0 0 10 17.073v-3.659l2-2z"></svg:path>`,
})
export class HealthiconsLungs24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
