import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biWindowSidebarIcon],svg[bi-window-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2.5 4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path><svg:path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h4v8H2a1 1 0 0 1-1-1m5 1V6h9v7a1 1 0 0 1-1 1z"></svg:path></svg:g>`,
})
export class BiWindowSidebarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
