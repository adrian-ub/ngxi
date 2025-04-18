import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowSquare07Icon],svg[hugeicons-workflow-square-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5c0-1.414 0-2.121.44-2.56C3.878 2 4.585 2 6 2s2.121 0 2.56.44C9 2.878 9 3.585 9 5s0 2.121-.44 2.56C8.122 8 7.415 8 6 8s-2.121 0-2.56-.44C3 7.122 3 6.415 3 5m0 14c0-1.414 0-2.121.44-2.56C3.878 16 4.585 16 6 16s2.121 0 2.56.44C9 16.878 9 17.585 9 19s0 2.121-.44 2.56C8.122 22 7.415 22 6 22s-2.121 0-2.56-.44C3 21.122 3 20.415 3 19M15 7c0-1.414 0-2.121.44-2.56C15.878 4 16.585 4 18 4s2.121 0 2.56.44C21 4.878 21 5.585 21 7s0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C15 9.122 15 8.415 15 7m-9 9V8m12 2a3 3 0 0 1-3 3H9a3 3 0 0 0-3 3" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowSquare07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
