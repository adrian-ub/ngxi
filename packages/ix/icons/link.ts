import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLinkIcon],svg[ix-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.334 234.667v42.666H170.667v-42.666zM234.667 341.333h-64c-47.053 0-85.333-38.28-85.333-85.333s38.28-85.333 85.333-85.333h64V128h-64c-70.693 0-128 57.307-128 128s57.307 128 128 128h64zM341.334 128h-64v42.667h64c47.053 0 85.333 38.28 85.333 85.333s-38.28 85.333-85.333 85.333h-64V384h64c70.692 0 128-57.307 128-128s-57.308-128-128-128"></svg:path>`,
})
export class IxLinkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
