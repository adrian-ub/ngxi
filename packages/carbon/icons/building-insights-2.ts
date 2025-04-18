import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBuildingInsights2Icon],svg[carbon-building-insights-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H16a2 2 0 0 0-2 2v10H4a2 2 0 0 0-2 2v14h28V4a2 2 0 0 0-2-2M9 28v-7h4v7Zm19 0H15v-8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v8H4V16h12V4h12Z"></svg:path><svg:path fill="currentColor" d="M18 8h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2zM5.5 12a3.5 3.5 0 0 1 0-7h.627A4.006 4.006 0 0 1 10 2h2v2h-2a2 2 0 0 0-2 2v1H5.5a1.5 1.5 0 0 0 0 3H12v2z"></svg:path>`,
})
export class CarbonBuildingInsights2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
