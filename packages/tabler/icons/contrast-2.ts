import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerContrast2Icon],svg[tabler-contrast-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></svg:path><svg:path d="M3 19h2.25C8.978 19 12 15.866 12 12s3.022-7 6.75-7H21"></svg:path></svg:g>`,
})
export class TablerContrast2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
