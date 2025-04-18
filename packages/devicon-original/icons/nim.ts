import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalNimIcon],svg[devicon-original-nim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#eec742" d="m109.398 60.598l-16.98-12.453l-28.645-5.29l-28.644 5.29l-16.98 12.453l-4.403 8.87l-6.234-11.94l-4.801-20.13l8.23 3.41l9.606-7.163l5.492-11.258l9.262 7.164l19.55-2.73l8.922-8.528l8.918 8.527l19.555 2.73l9.262-7.163l5.488 11.258l9.606 7.164l8.234-3.41l-4.805 20.128l-6.23 11.942zm0 0"></svg:path><svg:path d="m114.543 66.738l-5.145-1.363l-9.261 11.938l-12.696 3.753l-23.668-13.304l-23.671 13.304l-12.692-3.754l-9.262-11.937L13 66.738l-5.488-9.554l10.636 30.023l15.95 15.012l29.675 8.187l29.672-8.187l15.953-15.012l10.633-30.023zm0 0"></svg:path>`,
})
export class DeviconOriginalNimIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
