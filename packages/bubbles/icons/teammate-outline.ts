import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesTeammateOutlineIcon],svg[bubbles-teammate-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".8"><svg:path d="M10.906 8.521a1.255 1.255 0 1 0 0-2.51a1.255 1.255 0 0 0 0 2.51m2.05 1.567a2.59 2.59 0 0 0-3.564-.514M3.093 8.521a1.255 1.255 0 1 0 0-2.51a1.255 1.255 0 0 0 0 2.51m-2.05 1.566a2.59 2.59 0 0 1 3.565-.515"></svg:path><svg:path d="M9.916 11.244a2.917 2.917 0 0 0-5.833 0M6.97 7.531a1.724 1.724 0 1 0 0-3.447a1.724 1.724 0 0 0 0 3.447"></svg:path></svg:g>`,
})
export class BubblesTeammateOutlineIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
