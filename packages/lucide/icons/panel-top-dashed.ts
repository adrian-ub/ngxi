import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePanelTopDashedIcon],svg[lucide-panel-top-dashed-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M14 9h1m4 0h2M3 9h2m4 0h1"></svg:path></svg:g>`,
})
export class LucidePanelTopDashedIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
