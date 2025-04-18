import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowSquare09Icon],svg[hugeicons-workflow-square-09-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 19c0 1.414 0 2.121.44 2.56C3.878 22 4.585 22 6 22s2.121 0 2.56-.44C9 21.122 9 20.415 9 19s0-2.121-.44-2.56C8.122 16 7.415 16 6 16s-2.121 0-2.56.44C3 16.878 3 17.585 3 19M3 5c0 1.414 0 2.121.44 2.56C3.878 8 4.585 8 6 8s2.121 0 2.56-.44C9 7.122 9 6.415 9 5s0-2.121-.44-2.56C8.122 2 7.415 2 6 2s-2.121 0-2.56.44C3 2.878 3 3.585 3 5m12 0c0 1.414 0 2.121.44 2.56C15.878 8 16.585 8 18 8s2.121 0 2.56-.44C21 7.122 21 6.415 21 5s0-2.121-.44-2.56C20.122 2 19.415 2 18 2s-2.121 0-2.56.44C15 2.878 15 3.585 15 5M6 8v8m0-4h8c1.886 0 2.828 0 3.414-.586S18 9.886 18 8" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowSquare09Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
