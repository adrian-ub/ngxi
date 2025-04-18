import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenUshIcon],svg[token-ush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.93 3L4.06 7.5L12 12l7.942-4.5zM4.059 16.648V7.5l7.94 4.5v9z"></svg:path><svg:path fill="currentColor" d="M19.941 16.648V7.5L12 12v9z"></svg:path><svg:path fill="currentColor" d="m12 7.727l3.706 2.118v4.235L12 16.198L8.294 14.08V9.845z"></svg:path><svg:path fill="currentColor" d="M8.294 9.898L12 12v4.198L8.294 14.08z"></svg:path><svg:path fill="currentColor" d="M15.706 9.898v-.053L12 7.727L8.294 9.845v.053L12 11.999z"></svg:path>`,
})
export class TokenUshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
