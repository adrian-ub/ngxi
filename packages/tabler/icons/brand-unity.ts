import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandUnityIcon],svg[tabler-brand-unity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m14 3l6 4v7m-2 3l-6 4l-6-4m-2-3V7l6-4"></svg:path><svg:path d="m4 7l8 5v9m8-14l-8 5"></svg:path></svg:g>`,
})
export class TablerBrandUnityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
