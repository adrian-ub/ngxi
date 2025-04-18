import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashExpandVerticalDuotoneIcon],svg[stash-expand-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.793 8.707a1 1 0 1 0 1.414-1.414l-1.95-1.95c-.085-.085-.185-.186-.281-.267a1.5 1.5 0 0 0-.513-.295a1.5 1.5 0 0 0-.926 0a1.5 1.5 0 0 0-.513.295c-.096.081-.196.182-.28.266l-1.951 1.95a1 1 0 0 0 1.414 1.415L12 6.914zm-3.586 6.586a1 1 0 0 0-1.414 1.414l1.95 1.95c.085.085.185.186.281.267c.111.094.28.22.513.296a1.5 1.5 0 0 0 .926 0a1.5 1.5 0 0 0 .513-.296c.096-.081.196-.182.28-.266l1.951-1.95a1 1 0 0 0-1.414-1.415L12 17.086z"></svg:path>`,
})
export class StashExpandVerticalDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
