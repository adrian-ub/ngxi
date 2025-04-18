import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCardboardsOffIcon],svg[tabler-cardboards-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.96 16.953q.04-.22.04-.453V8a2 2 0 0 0-2-2h-9M6 6H5a2 2 0 0 0-2 2v8.5A2.5 2.5 0 0 0 5.5 19h1.06a3 3 0 0 0 2.34-1.13l1.54-1.92a2 2 0 0 1 3.12 0l1.54 1.92A3 3 0 0 0 17.44 19h1.06q.233 0 .454-.041"></svg:path><svg:path d="M7 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m9.714.7a1 1 0 0 0-1.417-1.411zM3 3l18 18"></svg:path></svg:g>`,
})
export class TablerCardboardsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
