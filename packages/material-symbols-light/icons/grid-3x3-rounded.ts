import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGrid3x3RoundedIcon],svg[material-symbols-light-grid-3x3-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15H5.5q-.213 0-.356-.144T5 14.499t.144-.356T5.5 14H9v-4H5.5q-.213 0-.356-.144T5 9.499t.144-.356T5.5 9H9V5.5q0-.213.144-.356T9.501 5t.356.144T10 5.5V9h4V5.5q0-.213.144-.356T14.501 5t.356.144T15 5.5V9h3.5q.213 0 .356.144t.144.357t-.144.356T18.5 10H15v4h3.5q.213 0 .356.144t.144.357t-.144.356T18.5 15H15v3.5q0 .213-.144.356t-.357.144t-.356-.144T14 18.5V15h-4v3.5q0 .213-.144.356T9.499 19t-.356-.144T9 18.5zm1-1h4v-4h-4z"></svg:path>`,
})
export class MaterialSymbolsLightGrid3x3RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
