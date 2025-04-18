import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAppWindowModuleOutlineIcon],svg[bubbles-app-window-module-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.76 8.253v-6a1.5 1.5 0 0 0-1.5-1.5h-18a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h6m-7.5-15h21m-3 13.5h4.5v4.5h-4.5zm-7.5 0h4.5v4.5h-4.5z"></svg:path><svg:path d="M15.76 11.253h4.5v4.5h-4.5z"></svg:path></svg:g>`,
})
export class BubblesAppWindowModuleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
