import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlowchart01Icon],svg[hugeicons-flowchart-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.028 13.375c.648-.648.972-.972.972-1.375s-.324-.727-.972-1.375l-.653-.653C12.727 9.324 12.403 9 12 9s-.727.324-1.375.972l-.653.653C9.324 11.273 9 11.597 9 12s.324.727.972 1.375l.653.653c.648.648.972.972 1.375.972s.727-.324 1.375-.972zM8 4c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2m0 16c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2"></svg:path><svg:path d="M8.5 12H8c-1.886 0-2.828 0-3.414-.586S4 9.886 4 8s0-2.828.586-3.414S6.114 4 8 4m7.5 8h.5c1.886 0 2.828 0 3.414.586S20 14.114 20 16s0 2.828-.586 3.414S17.886 20 16 20M12 8.5V6m0 9.5V18"></svg:path></svg:g>`,
})
export class HugeiconsFlowchart01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
