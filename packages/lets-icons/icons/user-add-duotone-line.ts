import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserAddDuotoneLineIcon],svg[lets-icons-user-add-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="8" r="4" fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-linecap="round" stroke-width="1.2"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M15.591 16a10.5 10.5 0 0 0-1.402-.384a11.2 11.2 0 0 0-4.378 0c-1.434.288-2.756.857-3.828 1.661c-1.073.805-1.867 1.824-2.275 2.968a.6.6 0 0 0 1.13.404c.318-.89.952-1.727 1.865-2.412c.914-.685 2.066-1.187 3.345-1.444a10 10 0 0 1 2.509-.178A2 2 0 0 1 14 16z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M18 14v8m4-4h-8"></svg:path></svg:g>`,
})
export class LetsIconsUserAddDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
