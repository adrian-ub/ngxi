import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiPanelBottomInactiveSolidIcon],svg[mynaui-panel-bottom-inactive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zM2.75 15a.75.75 0 0 1 .75-.75H5a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1-.75-.75m5.5 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m5.75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5m4.25.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H19a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class MynauiPanelBottomInactiveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
