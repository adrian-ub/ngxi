import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightbulbOn60Icon],svg[mdi-lightbulb-on-60-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21h4v1c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1zm-9-8h3v-2H1zm3.9-9.5L3.5 4.9L5.6 7L7 5.6zM13 1h-2v3h2zm7 10v2h3v-2zm-2 1c0 2.2-1.2 4.2-3 5.2V19c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-1.8c-1.8-1-3-3-3-5.2c0-3.3 2.7-6 6-6s6 2.7 6 6M8 12h8c0-2.21-1.79-4-4-4s-4 1.79-4 4m11.1-8.5L17 5.6L18.4 7l2.1-2.1z"></svg:path>`,
})
export class MdiLightbulbOn60Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
