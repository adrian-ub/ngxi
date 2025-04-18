import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashShrinkVerticalDuotoneIcon],svg[stash-shrink-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.793 6.293a1 1 0 1 1 1.414 1.414l-1.95 1.95c-.085.085-.185.186-.281.267a1.5 1.5 0 0 1-.513.296a1.5 1.5 0 0 1-.926 0a1.5 1.5 0 0 1-.513-.296c-.096-.081-.196-.182-.28-.266l-1.951-1.95a1 1 0 0 1 1.414-1.415L12 8.086zm-3.586 11.414a1 1 0 0 1-1.414-1.414l1.95-1.95c.085-.085.185-.186.281-.267c.111-.094.28-.22.513-.296a1.5 1.5 0 0 1 .926 0c.233.076.402.202.513.296c.096.081.196.182.28.266l1.951 1.95a1 1 0 0 1-1.414 1.415L12 15.914z"></svg:path>`,
})
export class StashShrinkVerticalDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
