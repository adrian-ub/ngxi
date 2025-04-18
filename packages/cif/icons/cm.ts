import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifCmIcon],svg[cif-cm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#007A5E" d="M.5.5h100v200H.5z"></svg:path><svg:path fill="#CE1126" d="M100.5.5h100v200h-100z"></svg:path><svg:path fill="#FCD116" d="M200.5.5h100v200h-100zm-75.362 91.76l15.675 11.388l-5.987 18.426l15.674-11.388l15.674 11.388l-5.987-18.426l15.675-11.388H156.4l-5.9-18.427l-5.899 18.427z"></svg:path></svg:g>`,
})
export class CifCmIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
