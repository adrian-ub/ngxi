import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaInfoOutlineIcon],svg[cuida-info-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="info-outline"><svg:g fill="currentColor" class="Vector"><svg:path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12 11a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M13 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g></svg:g>`,
})
export class CuidaInfoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
