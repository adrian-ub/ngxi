import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiVisTagCloudIcon],svg[oui-vis-tag-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 9.047a.5.5 0 1 0 0 1h13a.5.5 0 0 0 0-1zm0-1h13a1.5 1.5 0 0 1 0 3h-13a1.5 1.5 0 0 1 0-3M10 13a.5.5 0 1 1 0 1H4a.5.5 0 1 1 0-1zM8.001 2.015a.5.5 0 1 1-.002 1l-5-.015a.5.5 0 1 1 .003-1zM14 5a.5.5 0 1 1 0 1H6a.5.5 0 0 1 0-1z"></svg:path>`,
})
export class OuiVisTagCloudIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
