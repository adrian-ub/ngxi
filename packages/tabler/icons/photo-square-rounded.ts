import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPhotoSquareRoundedIcon],svg[tabler-photo-square-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 8h.01M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9"></svg:path><svg:path d="M3.5 15.5L8 11c.928-.893 2.072-.893 3 0l5 5"></svg:path><svg:path d="m14 14l1-1c.928-.893 2.072-.893 3 0l2.5 2.5"></svg:path></svg:g>`,
})
export class TablerPhotoSquareRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
