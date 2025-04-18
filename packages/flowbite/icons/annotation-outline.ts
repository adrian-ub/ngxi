import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteAnnotationOutlineIcon],svg[flowbite-annotation-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.9.9 0 0 0-.629.256a.87.87 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.9.9 0 0 0 4.89 16H9l3 4l3-4h4.111a.9.9 0 0 0 .629-.256a.87.87 0 0 0 .26-.619v-9.25a.87.87 0 0 0-.26-.619a.9.9 0 0 0-.63-.256Z"></svg:path>`,
})
export class FlowbiteAnnotationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
