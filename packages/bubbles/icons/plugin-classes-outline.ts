import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginClassesOutlineIcon],svg[bubbles-plugin-classes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.75 3.373a9.54 9.54 0 0 0-12 0m2.5 3.615a5.566 5.566 0 0 1 7 0M1.5 14.375a2.625 2.625 0 1 0 5.25 0a2.625 2.625 0 0 0-5.25 0m6.764 6.108A4.5 4.5 0 0 0 1.5 18.6m17.25-4.225a2.625 2.625 0 1 0 5.25 0a2.625 2.625 0 0 0-5.25 0m-1.514 6.108A4.5 4.5 0 0 1 24 18.6M9.375 13.625a3.375 3.375 0 1 0 6.75 0a3.375 3.375 0 0 0-6.75 0"></svg:path><svg:path d="M18.75 23.75a6.055 6.055 0 0 0-12 0"></svg:path></svg:g>`,
})
export class BubblesPluginClassesOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
