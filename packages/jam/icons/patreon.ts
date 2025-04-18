import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPatreonIcon],svg[jam-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.808.01c-3.95 0-7.164 3.196-7.164 7.125c0 3.916 3.214 7.103 7.164 7.103c3.938 0 7.142-3.187 7.142-7.103c0-3.93-3.204-7.125-7.142-7.125M.05 18.99V.01h3.502v18.98z"></svg:path>`,
})
export class JamPatreonIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
