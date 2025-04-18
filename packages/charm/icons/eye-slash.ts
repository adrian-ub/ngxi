import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmEyeSlashIcon],svg[charm-eye-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.75 3.75c3.5.5 5.5 4.25 5.5 4.25s-.5 1.25-1.5 2.25m-2.5 1.5c-6 2-8.5-3.75-8.5-3.75s.5-1.75 3-3.25"></svg:path><svg:path fill="currentColor" d="M8.625 9.083a1.25 1.25 0 0 1-1.649-.366a1.25 1.25 0 0 1 .22-1.675L8 8z"></svg:path><svg:path d="m3.75 1.75l8.5 12.5"></svg:path></svg:g>`,
})
export class CharmEyeSlashIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
