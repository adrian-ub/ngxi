import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggInpictureIcon],svg[gg-inpicture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 12h-6v5h6z"></svg:path><svg:path fill-rule="evenodd" d="M1 6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm2 0h18v12H3z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgInpictureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
