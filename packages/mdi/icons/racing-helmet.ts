import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRacingHelmetIcon],svg[mdi-racing-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.2 11.2c-.2 2.4.5 4.4 2 6.2S7.7 20 10.1 20h10c.5 0 1-.2 1.4-.6s.6-.9.6-1.4v-.8c0-.6-.1-1.3-.2-2.2h-8.2c-1 0-1.8-.4-2.5-1.1s-1.1-1.6-1.1-2.5c0-1.6.7-2.7 2.2-3.3L17.1 6c-1.7-1.2-3.7-1.9-6-2c-2.2-.2-4.2.5-6 1.9S2.4 9 2.2 11.2m9.9.2c0 .4.2.8.5 1.1s.7.5 1.1.5h7.8c-.6-2.2-1.5-4-2.8-5.4l-5.6 2.3c-.7.2-1 .7-1 1.5"></svg:path>`,
})
export class MdiRacingHelmetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
