import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginComunicaSolidIcon],svg[bubbles-plugin-comunica-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5.5A12 12 0 0 0 2.268 18.77L.553 23.342a.857.857 0 0 0 .957 1.143l5.988-1.09a11.8 11.8 0 0 0 5 1.104a12 12 0 0 0 0-24M8.213 12.59a1.714 1.714 0 0 1-1.715 1.624h-.09a1.714 1.714 0 1 1 1.805-1.625m6 0a1.714 1.714 0 0 1-1.715 1.624h-.09a1.713 1.713 0 0 1-1.624-1.807a1.714 1.714 0 0 1 2.986-1.054a1.7 1.7 0 0 1 .443 1.236m6 0a1.714 1.714 0 0 1-1.715 1.624h-.092a1.713 1.713 0 0 1-1.051-2.987a1.73 1.73 0 0 1 1.234-.441a1.713 1.713 0 0 1 1.624 1.803"></svg:path>`,
})
export class BubblesPluginComunicaSolidIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
