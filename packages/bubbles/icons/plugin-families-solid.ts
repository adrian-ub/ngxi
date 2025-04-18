import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginFamiliesSolidIcon],svg[bubbles-plugin-families-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m24.009 9.5l-11.25-8.25L1.509 9.5m2.25 3.75a3 3 0 1 0 6 0a3 3 0 0 0-6 0m4.5 4.756a4.5 4.5 0 0 0-6 4.244m21 0a4.5 4.5 0 0 0-6-4.244m-1.5-4.756a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path><svg:path fill="currentColor" d="M10.509 18.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0"></svg:path><svg:path fill="currentColor" d="M16.656 23.75a4.5 4.5 0 0 0-7.793 0"></svg:path></svg:g>`,
})
export class BubblesPluginFamiliesSolidIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
