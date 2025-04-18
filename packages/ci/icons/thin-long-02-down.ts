import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciThinLong02DownIcon],svg[ci-thin-long-02-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 16l3 3l3-3l-.707-.707l-1.793 1.793V5h-1v12.086l-1.793-1.793L9 16Z"></svg:path>`,
})
export class CiThinLong02DownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
