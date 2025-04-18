import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForCrossedFlagsIcon],svg[emojione-flag-for-crossed-flags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e6eff4" d="M32.2 23.6c6 9.8 17.6 1.5 23.6 11.4c2-6.7 4.2-13.5 6.2-20.2C56 5 44.4 13.3 38.4 3.4c-2.1 6.7-4.2 13.4-6.2 20.2"></svg:path><svg:path fill="#ff2449" d="M51.4 21.3c-.8 2.8-3.5 4.1-5.9 3c-2.4-1.2-3.7-4.4-2.8-7.1c.8-2.8 3.5-4.1 5.9-3s3.7 4.3 2.8 7.1"></svg:path><svg:path fill="#3e4347" d="M39.4 3.3c.2-.5-.1-1.1-.7-1.3c-.5-.2-1.1.1-1.3.7L19.3 62h2.2z"></svg:path><svg:path fill="#e6eff4" d="M31.8 23.6c-6 9.8-17.6 1.5-23.6 11.4C6.2 28.2 4 21.5 2 14.7c6-9.8 17.6-1.5 23.6-11.4c2.1 6.8 4.2 13.5 6.2 20.3"></svg:path><svg:path fill="#ff2449" d="M12.6 21.3c.8 2.8 3.5 4.1 5.9 3c2.4-1.2 3.7-4.4 2.8-7.1c-.8-2.8-3.5-4.1-5.9-3s-3.7 4.3-2.8 7.1"></svg:path><svg:path fill="#4c5256" d="M26.6 2.7c-.2-.5-.8-.9-1.3-.7s-.9.8-.7 1.3l18 58.7h2.2z"></svg:path>`,
})
export class EmojioneFlagForCrossedFlagsIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
