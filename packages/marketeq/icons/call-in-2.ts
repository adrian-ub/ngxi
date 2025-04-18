import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCallIn2Icon],svg[marketeq-call-in-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 6.25c9.646.563 15.438 8.333 15.438 18.75"></svg:path><svg:path stroke="#344054" d="M35.146 21.417L40.437 25l3.313-5.708"></svg:path><svg:path stroke="#306CFE" d="M31.25 43.75a27.5 27.5 0 0 1-9.042-3.98L26 34.334a4.167 4.167 0 0 1 5.583-1.062c.688.437 1.396.833 2.084 1.229a4.167 4.167 0 0 1 1.75 5.875l-1.292 1.98a2.44 2.44 0 0 1-2.875 1.395M7.646 15.98l2.083-1.293a4.167 4.167 0 0 1 5.938 1.521c.396.75.791 1.459 1.229 2.084a4.167 4.167 0 0 1-1.063 5.583l-5.541 3.854A27.5 27.5 0 0 1 6.25 18.75a2.44 2.44 0 0 1 1.396-2.77"></svg:path><svg:path stroke="#306CFE" d="M10.292 27.73a37 37 0 0 0 5.375 6.603a37 37 0 0 0 6.604 5.375"></svg:path></svg:g>`,
})
export class MarketeqCallIn2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
