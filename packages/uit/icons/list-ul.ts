import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitListUlIcon],svg[uit-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 12a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m3-4h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0 0 1m-3 9a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m18-5h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1m-18-5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m18 10h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1"></svg:path>`,
})
export class UitListUlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
