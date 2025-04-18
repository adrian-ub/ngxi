import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaCheckboxCheckedOutlinedIcon],svg[cuida-checkbox-checked-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="checkbox-checked-outlined"><svg:g fill="currentColor" fill-rule="evenodd" class="Vector" clip-rule="evenodd"><svg:path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"></svg:path><svg:path d="M17.096 8.282a1 1 0 0 1 .022 1.414l-5.643 5.822a1.24 1.24 0 0 1-1.78 0L7.281 13.03a1 1 0 1 1 1.436-1.392l1.867 1.926l5.097-5.259a1 1 0 0 1 1.414-.022Z"></svg:path></svg:g></svg:g>`,
})
export class CuidaCheckboxCheckedOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
