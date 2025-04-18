import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingFactory24FilledIcon],svg[fluent-building-factory-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.923 4.129A2.25 2.25 0 0 1 5.17 2h1.158a2.25 2.25 0 0 1 2.246 2.129l.838 15.5A2.25 2.25 0 0 1 7.166 22H4.332a2.25 2.25 0 0 1-2.247-2.371zM9.511 22h10.238a2.25 2.25 0 0 0 2.25-2.25V6a.75.75 0 0 0-1.259-.551l-5.24 4.838V6a.75.75 0 0 0-1.259-.551L9.866 9.487l.545 10.088c.05.938-.3 1.8-.9 2.425m3.488-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4.5h-6z"></svg:path>`,
})
export class FluentBuildingFactory24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
