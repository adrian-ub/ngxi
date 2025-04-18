import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsHeadphonesIcon],svg[proicons-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 17.368V12A9.25 9.25 0 0 0 12 2.75v0A9.25 9.25 0 0 0 2.75 12v5.368"></svg:path><svg:path d="M2.75 13.321h4a1.5 1.5 0 0 1 1.5 1.5v4.429a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2zm13 1.5a1.5 1.5 0 0 1 1.5-1.5h4v5.929a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class ProiconsHeadphonesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
