import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaCheckOutlineIcon],svg[cuida-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="check-outline"><svg:path fill="currentColor" fill-rule="evenodd" d="M19.696 6.282a1 1 0 0 1 .022 1.414L10.313 17.4a1.4 1.4 0 0 1-2.01 0l-4.021-4.148a1 1 0 1 1 1.436-1.392l3.59 3.703l8.974-9.259a1 1 0 0 1 1.414-.022" class="Vector" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CuidaCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
