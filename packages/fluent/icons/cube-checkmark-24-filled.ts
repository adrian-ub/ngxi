import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCubeCheckmark24FilledIcon],svg[fluent-cube-checkmark-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.409 2.512a3.75 3.75 0 0 0-2.818 0l-7.498 3.04A1.75 1.75 0 0 0 2 7.174v9.653a1.75 1.75 0 0 0 1.093 1.621l7.498 3.04a3.75 3.75 0 0 0 1.966.233A6.48 6.48 0 0 1 11 17.5c0-.621.087-1.222.25-1.791v-4.95L6.484 8.952a.75.75 0 1 1 .532-1.402L12 9.439l4.984-1.89a.75.75 0 1 1 .532 1.402L12.75 10.76v2.304A6.48 6.48 0 0 1 17.5 11c1.747 0 3.332.689 4.5 1.81V7.174a1.75 1.75 0 0 0-1.093-1.622zM23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-6.146 2.354l4-4a.5.5 0 0 0-.708-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0"></svg:path>`,
})
export class FluentCubeCheckmark24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
