import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnFlowParallelIcon],svg[typcn-flow-parallel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16.184V7.816A3 3 0 0 0 20 5c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.302.839 2.401 2 2.815v8.369A3 3 0 0 0 14 19c0 1.654 1.346 3 3 3s3-1.346 3-3a3 3 0 0 0-2-2.816M17 4a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1m0 16a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2M10 5c0-1.654-1.346-3-3-3S4 3.346 4 5c0 1.302.839 2.401 2 2.815v8.369A3 3 0 0 0 4 19c0 1.654 1.346 3 3 3s3-1.346 3-3a3 3 0 0 0-2-2.816V7.816A3 3 0 0 0 10 5M7 4a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1m0 16a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2"></svg:path>`,
})
export class TypcnFlowParallelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
