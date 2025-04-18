import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirOpenNewWindowIcon],svg[iconoir-open-new-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21 3h-6m6 0l-9 9m9-9v6"></svg:path><svg:path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></svg:path></svg:g>`,
})
export class IconoirOpenNewWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
