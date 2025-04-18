import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandReduxIcon],svg[tabler-brand-redux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16.54 7c-.805-2.365-2.536-4-4.54-4c-2.774 0-5.023 2.632-5.023 6.496c0 1.956 1.582 4.727 2.512 6"></svg:path><svg:path d="M4.711 11.979C3.055 13.856 2.497 16.164 3.5 17.89c1.387 2.39 5.138 2.831 8.501.9c1.703-.979 2.875-3.362 3.516-4.798"></svg:path><svg:path d="M15.014 19.99c2.511 0 4.523-.438 5.487-2.1c1.387-2.39-.215-5.893-3.579-7.824c-1.702-.979-4.357-1.235-5.927-1.07"></svg:path><svg:path d="M10.493 9.862c.48.276 1.095.112 1.372-.366a1 1 0 0 0-.367-1.365a1.007 1.007 0 0 0-1.373.366a1 1 0 0 0 .368 1.365M8.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m6-1.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path></svg:g>`,
})
export class TablerBrandReduxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
