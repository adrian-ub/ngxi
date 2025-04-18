import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageTwtichIcon],svg[mage-twtich-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.899 6.926h-1.455v4.21H16.9zm-3.795 0H11.65v4.21h1.454z"></svg:path><svg:path fill="currentColor" d="M20.398 3H7.156L3.547 6.543v12.674h4.167V23l3.695-3.74h2.778l6.266-6.276zM8.053 14.733V4.771H18.79v7.316l-2.68 2.679h-2.733l-2.187 2.11V14.69z"></svg:path>`,
})
export class MageTwtichIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
