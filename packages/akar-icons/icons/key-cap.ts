import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsKeyCapIcon],svg[akar-icons-key-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 3s3 .5 5 .5s5-.5 5-.5l1 9s-3 1-6 1s-6-1-6-1z"></svg:path><svg:path d="m3.869 8.147l-.862 10.294c-.03.366.04.733.205 1.06l.197.393A2.01 2.01 0 0 0 5.206 21h13.588a2.01 2.01 0 0 0 1.797-1.106l.197-.392c.165-.328.236-.695.205-1.06l-.862-10.295a4 4 0 0 0-.79-2.068L17 3s-3 .5-5 .5S6.978 3 6.978 3l-2.32 3.08a4 4 0 0 0-.79 2.067M6 12l-2.5 8M18 12l2.5 8"></svg:path></svg:g>`,
})
export class AkarIconsKeyCapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
