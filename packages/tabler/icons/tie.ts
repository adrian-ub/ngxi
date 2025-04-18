import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTieIcon],svg[tabler-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 22l4-4l-2.5-11l.993-2.649A1 1 0 0 0 13.557 3h-3.114a1 1 0 0 0-.936 1.351L10.5 7L8 18z"></svg:path><svg:path d="M10.5 7h3l5 5.5"></svg:path></svg:g>`,
})
export class TablerTieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
