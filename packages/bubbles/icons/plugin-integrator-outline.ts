import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginIntegratorOutlineIcon],svg[bubbles-plugin-integrator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.404 15.962a6.923 6.923 0 1 0 13.845 0a6.923 6.923 0 0 0-13.845 0"></svg:path><svg:path d="M9.245 2.51a.59.59 0 0 0-1.114 0L.881 15c-.307.528-.056.96.558.96h14.5c.614 0 .865-.432.558-.96z"></svg:path></svg:g>`,
})
export class BubblesPluginIntegratorOutlineIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
