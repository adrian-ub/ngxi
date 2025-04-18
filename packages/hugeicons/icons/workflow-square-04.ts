import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkflowSquare04Icon],svg[hugeicons-workflow-square-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 18c0-1.414 0-2.121.44-2.56C15.878 15 16.585 15 18 15s2.121 0 2.56.44c.44.439.44 1.146.44 2.56s0 2.121-.44 2.56c-.439.44-1.146.44-2.56.44s-2.121 0-2.56-.44C15 20.122 15 19.415 15 18M3 9c0-1.414 0-2.121.44-2.56C3.878 6 4.585 6 6 6s2.121 0 2.56.44C9 6.878 9 7.585 9 9s0 2.121-.44 2.56C8.122 12 7.415 12 6 12s-2.121 0-2.56-.44C3 11.122 3 10.415 3 9m6 0h3c2.828 0 4.243 0 5.121.879C18 10.757 18 12.172 18 15M6 12v10M6 6V2" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkflowSquare04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
