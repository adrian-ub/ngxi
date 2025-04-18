import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[noniconsC16Icon],svg[nonicons-c-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.586.102a.75.75 0 0 1 .756 0l6.214 3.625a.75.75 0 0 1 .373.648v7.25a.75.75 0 0 1-.373.648l-6.214 3.625a.75.75 0 0 1-.756 0l-6.214-3.625A.75.75 0 0 1 1 11.625v-7.25a.75.75 0 0 1 .372-.648zm.378 14.28l5.465-3.188V4.806L7.964 1.618L2.5 4.806v6.388z"></svg:path><svg:path fill="currentColor" d="M8 5.5a2.5 2.5 0 1 0 1.81 4.225a.75.75 0 1 1 1.086 1.035a4 4 0 1 1-.01-5.53a.75.75 0 0 1-1.082 1.04A2.5 2.5 0 0 0 8 5.5"></svg:path>`,
})
export class NoniconsC16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
