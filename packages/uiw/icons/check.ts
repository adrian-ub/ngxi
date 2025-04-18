import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwCheckIcon],svg[uiw-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.635 4.243a.795.795 0 0 1 1.12-.023a.79.79 0 0 1 .024 1.117L8.787 16.757a.795.795 0 0 1-1.137.008L.228 9.262a.79.79 0 0 1 .008-1.117a.795.795 0 0 1 1.122.008l6.849 6.924z"></svg:path>`,
})
export class UiwCheckIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
