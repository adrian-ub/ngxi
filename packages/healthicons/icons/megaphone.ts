import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMegaphoneIcon],svg[healthicons-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 31v7a2 2 0 1 0 4 0v-7zm-5-5v-6a3 3 0 0 1 3-3h6v12h-6a3 3 0 0 1-3-3m27-3v-1a3 3 0 0 0-3-3v7a3 3 0 0 0 3-3m-16 7V15l9.463-6.022A1 1 0 0 1 29 9.822v25.356a1 1 0 0 1-1.537.844z"></svg:path><svg:path fill-rule="evenodd" d="M40.832 17.445a1 1 0 0 1-.277 1.387l-3 2a1 1 0 0 1-1.11-1.664l3-2a1 1 0 0 1 1.387.277M36 24a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m.168 3.445a1 1 0 0 1 1.387-.277l3 2a1 1 0 0 1-1.11 1.664l-3-2a1 1 0 0 1-.277-1.387" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMegaphoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
