import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaPauseOutlineIcon],svg[cuida-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="pause-outline"><svg:path fill="currentColor" fill-rule="evenodd" d="M9 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m6 0a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1" class="Vector" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CuidaPauseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
