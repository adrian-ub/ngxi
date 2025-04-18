import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBraces16FilledIcon],svg[fluent-braces-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 2A2.25 2.25 0 0 0 2.5 4.25v1.755c0 .546-.012.755-.071.904c-.032.079-.105.216-.514.42a.75.75 0 0 0 0 1.342c.409.204.482.341.514.42c.06.15.071.36.071.909v1.75A2.25 2.25 0 0 0 4.75 14a.75.75 0 0 0 0-1.5a.75.75 0 0 1-.75-.75V9.927c0-.436.001-.943-.179-1.393q-.12-.3-.323-.534q.203-.234.323-.533c.18-.45.18-.956.18-1.39L4 4.25a.75.75 0 0 1 .75-.75a.75.75 0 0 0 0-1.5m6.5 0a2.25 2.25 0 0 1 2.25 2.25v1.755c0 .546.011.755.071.904c.032.079.105.216.514.42a.75.75 0 0 1 0 1.342c-.409.204-.482.341-.514.42c-.06.15-.071.36-.071.909v1.75A2.25 2.25 0 0 1 11.25 14a.75.75 0 0 1 0-1.5a.75.75 0 0 0 .75-.75V9.927c0-.436-.001-.943.179-1.393q.12-.3.323-.534a1.9 1.9 0 0 1-.323-.533c-.18-.45-.18-.956-.18-1.39L12 4.25a.75.75 0 0 0-.75-.75a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class FluentBraces16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
