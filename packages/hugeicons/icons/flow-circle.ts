import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlowCircleIcon],svg[hugeicons-flow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 15a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M10 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path d="M22 4.5h-4M6 8c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C7.393 4.5 8.096 4.5 9.5 4.5H13m9 15h-4M6 16c0 1.405 0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337H13"></svg:path></svg:g>`,
})
export class HugeiconsFlowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
