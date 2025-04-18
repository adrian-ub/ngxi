import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsModem16Icon],svg[qlementine-icons-modem-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 8a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m2 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.5.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0m2.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.96.314a.501.501 0 0 0-.929.371l1.73 4.31H4c-.93 0-1.39 0-1.78.102A3 3 0 0 0 .1 7.217c-.102.382-.102.846-.102 1.78s0 1.4.102 1.78a3 3 0 0 0 2.12 2.12c.382.102.846.102 1.78.102h8c.93 0 1.4 0 1.78-.102a3 3 0 0 0 2.12-2.12c.102-.382.102-.847.102-1.78s0-1.39-.102-1.78a3 3 0 0 0-2.12-2.12c-.382-.102-.846-.102-1.78-.102h-.762l1.73-4.31a.5.5 0 1 0-.928-.371l-1.87 4.69H5.85L3.98.314zm6.55 5.69H3.992c-.994 0-1.3.009-1.52.068c-.69.185-1.23.724-1.41 1.41c-.06.222-.068.523-.068 1.52s.009 1.3.068 1.52c.185.69.724 1.23 1.41 1.41c.222.06.523.068 1.52.068h8c.994 0 1.3-.008 1.52-.068a1.99 1.99 0 0 0 1.41-1.41c.06-.222.068-.523.068-1.52s-.008-1.3-.068-1.52a1.99 1.99 0 0 0-1.41-1.41c-.222-.06-.523-.068-1.52-.068h-1.49z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsModem16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
