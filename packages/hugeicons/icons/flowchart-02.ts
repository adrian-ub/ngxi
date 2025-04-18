import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlowchart02Icon],svg[hugeicons-flowchart-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M14 6v4m-4 2H8c-1.886 0-2.828 0-3.414.586S4 14.114 4 16v2m2 2h4m0-16c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2m0 8c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2m0 8c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2m8-8c1.886 0 2.828 0 3.414-.586S22 9.886 22 8s0-2.828-.586-3.414S19.886 4 18 4"></svg:path></svg:g>`,
})
export class HugeiconsFlowchart02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
