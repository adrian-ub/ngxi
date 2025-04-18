import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibGhostIcon],svg[cib-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.807 25.599H.01V32h12.797zm19.183 0H19.204V32H31.99zm.005-12.797H0v6.396h31.995zM32 0h-6.401v6.401H32zM19.203 0H.01v6.401h19.193z"></svg:path>`,
})
export class CibGhostIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
