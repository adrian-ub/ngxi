import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginAssignmentsOutlineIcon],svg[bubbles-plugin-assignments-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m21.174 23.76l-2.96-1.753a1.7 1.7 0 0 1-.692-1.67v-1.825l-1.106-1.107a1.327 1.327 0 0 1 .2-2.04v0a1.33 1.33 0 0 1 1.673.165l1.56 1.561M17.772 9.9l4.162 3.683a4.5 4.5 0 0 1 .838 2.616v2.18c0 .627.25 1.228.692 1.67l.286.287M9.064 23.76l2.426-2.982a1.27 1.27 0 0 0-.159-1.76a1.2 1.2 0 0 0-1.722.162l-.837.716V14.01a1.5 1.5 0 0 0-3 0v3.75H4.533a3.3 3.3 0 0 0-3.261 3.332v2.667"></svg:path><svg:path d="M17.772 15.213V5.011a.75.75 0 0 0-.75-.75h-4.5a3 3 0 1 0-6 0h-4.5a.75.75 0 0 0-.75.75v9.749"></svg:path><svg:path d="M9.522 3.886a.375.375 0 1 1 0 .75a.375.375 0 0 1 0-.75"></svg:path></svg:g>`,
})
export class BubblesPluginAssignmentsOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
