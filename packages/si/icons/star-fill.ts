import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siStarFillIcon],svg[si-star-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.954 1.7a1 1 0 0 0-1.908-.001l-2.184 6.92l-6.861-.005a1 1 0 0 0-.566 1.826l5.498 3.762l-2.067 6.545A1 1 0 0 0 6.4 21.86l5.6-4.006l5.594 4.007a1 1 0 0 0 1.536-1.114l-2.067-6.545l5.502-3.762a1 1 0 0 0-.566-1.826l-6.866.005z"></svg:path>`,
})
export class SiStarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
