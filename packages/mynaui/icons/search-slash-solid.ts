import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSearchSlashSolidIcon],svg[mynaui-search-slash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.53 2.47a.75.75 0 0 1 0 1.06l-3.257 3.258A8.2 8.2 0 0 1 19.75 11.5a8.22 8.22 0 0 1-1.922 5.294l2.675 2.676a.75.75 0 0 1-1.06 1.06l-2.678-2.678A8.22 8.22 0 0 1 11.5 19.75a8.2 8.2 0 0 1-4.712-1.477L3.53 21.53a.75.75 0 0 1-1.06-1.06l3.166-3.167A8.25 8.25 0 0 1 17.303 5.636L20.47 2.47a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class MynauiSearchSlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
