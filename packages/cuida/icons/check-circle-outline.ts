import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaCheckCircleOutlineIcon],svg[cuida-check-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="check-circle-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path><svg:path d="M16.696 9.282a1 1 0 0 1 .022 1.414L12.16 15.4a1.4 1.4 0 0 1-2.01 0l-1.867-1.926a1 1 0 0 1 1.436-1.392l1.436 1.481l4.128-4.259a1 1 0 0 1 1.414-.022Z"></svg:path></svg:g></svg:g>`,
})
export class CuidaCheckCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
