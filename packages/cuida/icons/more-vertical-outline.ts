import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaMoreVerticalOutlineIcon],svg[cuida-more-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="more-vertical-outline"><svg:path fill="currentColor" d="M12 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4" class="Vector"></svg:path></svg:g>`,
})
export class CuidaMoreVerticalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
