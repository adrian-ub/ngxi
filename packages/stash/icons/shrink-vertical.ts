import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashShrinkVerticalIcon],svg[stash-shrink-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.97 6.47a.75.75 0 1 1 1.06 1.06l-1.948 1.95c-.087.086-.18.18-.268.254c-.1.085-.239.187-.428.249a1.25 1.25 0 0 1-.772 0a1.3 1.3 0 0 1-.428-.249a5 5 0 0 1-.268-.254L8.97 7.53a.75.75 0 0 1 1.06-1.06L12 8.44zm-3.94 11.06a.75.75 0 1 1-1.06-1.06l1.948-1.949c.087-.086.18-.18.268-.255c.1-.084.239-.186.428-.248a1.25 1.25 0 0 1 .772 0c.189.062.329.164.428.248c.088.075.181.169.268.255l1.948 1.949a.75.75 0 1 1-1.06 1.06L12 15.56z"></svg:path>`,
})
export class StashShrinkVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
