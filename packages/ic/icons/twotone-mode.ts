import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneModeIcon],svg[ic-twotone-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.06 9.02L5 18.08V19h.92l9.06-9.06z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M18.37 3.29c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41zm-.56 6.65l-3.75-3.75L3 17.25V21h3.75zM5 19v-.92l9.06-9.06l.92.92L5.92 19z"></svg:path>`,
})
export class IcTwotoneModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
