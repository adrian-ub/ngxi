import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaClockOutlineIcon],svg[cuida-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="clock-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path d="M12 6a1 1 0 0 1 1 1v4.393l2.78 1.444a1 1 0 1 1-.922 1.775l-2.888-1.5a1.8 1.8 0 0 1-.97-1.598V7a1 1 0 0 1 1-1"></svg:path></svg:g></svg:g>`,
})
export class CuidaClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
