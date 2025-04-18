import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixWorkCaseIcon],svg[ix-work-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m320 64l21.334 21.333l-.001 42.667h128v298.667H42.668V128h128V85.333L192 64zM85.333 284.935V384h341.334v-99.065c-42.625 12.196-85.298 19.824-128 22.874v33.524h-85.333V307.81c-42.702-3.05-85.375-10.678-128-22.874m341.334-114.268H85.334v69.766c56.972 17.5 113.84 26.234 170.666 26.234c56.827 0 113.695-8.734 170.668-26.234zm-128-64h-85.333V128h85.333z"></svg:path>`,
})
export class IxWorkCaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
