import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginContentCreatorOutlineIcon],svg[bubbles-plugin-content-creator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.5 1.5v2m-2 2h-2m2 14h-2m18-18v2m-14 18v2m14-2v2m4-18h-2m2 14h-2m-16-14h14v14h-14z"></svg:path><svg:path d="M11.5 14.5H9a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1.5"></svg:path><svg:path d="M11.5 10.5h5v6h-5z"></svg:path></svg:g>`,
})
export class BubblesPluginContentCreatorOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
