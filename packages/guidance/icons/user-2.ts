import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceUser2Icon],svg[guidance-user-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M21.435 16.677V23.5H2.565v-6.823S6.192 14.5 12 14.5c5.806 0 9.435 2.177 9.435 2.177ZM6.92 5.58A5.084 5.084 0 0 1 12.005.5a5.073 5.073 0 0 1 5.075 5.08c0 3.89-4.974 6.533-4.974 6.533h-.214S6.919 9.47 6.919 5.58Z"></svg:path>`,
})
export class GuidanceUser2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
