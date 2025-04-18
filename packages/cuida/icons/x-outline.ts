import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaXOutlineIcon],svg[cuida-x-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="x-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M5.293 5.293a1 1 0 0 1 1.414 0L19.435 18.02a1 1 0 0 1-1.414 1.414L5.293 6.707a1 1 0 0 1 0-1.414"></svg:path><svg:path d="M19.707 5.293a1 1 0 0 1 0 1.414L6.979 19.435a1 1 0 1 1-1.414-1.414L18.293 5.293a1 1 0 0 1 1.414 0"></svg:path></svg:g></svg:g>`,
})
export class CuidaXOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
