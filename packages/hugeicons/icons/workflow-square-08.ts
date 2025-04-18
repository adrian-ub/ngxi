import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowSquare08Icon],svg[hugeicons-workflow-square-08-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 19c0 1.414 0 2.121.44 2.56C3.878 22 4.585 22 6 22s2.121 0 2.56-.44C9 21.122 9 20.415 9 19s0-2.121-.44-2.56C8.122 16 7.415 16 6 16s-2.121 0-2.56.44C3 16.878 3 17.585 3 19M3 5c0 1.414 0 2.121.44 2.56C3.878 8 4.585 8 6 8s2.121 0 2.56-.44C9 7.122 9 6.415 9 5s0-2.121-.44-2.56C8.122 2 7.415 2 6 2s-2.121 0-2.56.44C3 2.878 3 3.585 3 5m12 9c0 1.414 0 2.121.44 2.56c.439.44 1.146.44 2.56.44s2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56s0-2.121-.44-2.56C20.122 11 19.415 11 18 11s-2.121 0-2.56.44C15 11.878 15 12.585 15 14M6 8v8m9-2h-3a6 6 0 0 1-6-6" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowSquare08Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
