import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsSaveIcon],svg[rivet-icons-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 4H4v2h5z"></svg:path><svg:path d="M10.414 1H1v14h14V5.586zM3 13V3h6.586L13 6.414V13h-1V9H4v4zm7-2v2H6v-2z"></svg:path></svg:g>`,
})
export class RivetIconsSaveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
