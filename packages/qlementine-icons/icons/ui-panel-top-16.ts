import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsUiPanelTop16Icon],svg[qlementine-icons-ui-panel-top-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 4a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13 15c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3H3C1.34 1 0 2.34 0 4v8c0 1.66 1.34 3 3 3zM3 14h10c1.1 0 2-.895 2-2V6H1v6c0 1.1.895 2 2 2M15 4v1H1V4c0-1.1.895-2 2-2h10c1.1 0 2 .895 2 2" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsUiPanelTop16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
