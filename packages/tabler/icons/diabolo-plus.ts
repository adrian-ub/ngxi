import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDiaboloPlusIcon],svg[tabler-diabolo-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6"></svg:path><svg:path d="M4 6v.143a1 1 0 0 0 .048.307L6 12l-1.964 5.67a1 1 0 0 0-.036.265V18c0 1.657 3.582 3 8 3q.255 0 .508-.006M18 12l1.952-5.55A1 1 0 0 0 20 6.143V6"></svg:path><svg:path d="M6 12c0 1.105 2.686 2 6 2s6-.895 6-2m-2 7h6m-3-3v6"></svg:path></svg:g>`,
})
export class TablerDiaboloPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
