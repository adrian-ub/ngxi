import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapAddFilledIcon],svg[tdesign-map-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2.717L2 5.926V21.5l5.5-2.267zm2 16.193l3.245 1.916A6.47 6.47 0 0 1 11.5 17a6.5 6.5 0 0 1 3-5.478V5.09l-5-2.953zM22 2.5v9.376a6.52 6.52 0 0 0-5.5-1.202V4.767z"></svg:path><svg:path fill="currentColor" d="M19 16v-4h-2v4h-4v2h4v4h2v-4h4v-2z"></svg:path>`,
})
export class TdesignMapAddFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
