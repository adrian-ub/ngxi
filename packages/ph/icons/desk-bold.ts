import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDeskBoldIcon],svg[ph-desk-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 60H12a12 12 0 0 0 0 24h4v108a12 12 0 0 0 24 0v-36h176v36a12 12 0 0 0 24 0V84h4a12 12 0 0 0 0-24M40 84h76v48H40Zm176 48h-76V84h76Zm-116-24a12 12 0 0 1-12 12H68a12 12 0 0 1 0-24h20a12 12 0 0 1 12 12m56 0a12 12 0 0 1 12-12h20a12 12 0 0 1 0 24h-20a12 12 0 0 1-12-12"></svg:path>`,
})
export class PhDeskBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
