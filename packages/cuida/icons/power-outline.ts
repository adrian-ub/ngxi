import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaPowerOutlineIcon],svg[cuida-power-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="power-outline"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M12 2a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"></svg:path><svg:path d="M6.343 6.343a8 8 0 1 0 11.314 0A1 1 0 1 1 19.07 4.93c3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0s-3.905-10.237 0-14.142a1 1 0 0 1 1.414 1.414Z"></svg:path></svg:g></svg:g>`,
})
export class CuidaPowerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
