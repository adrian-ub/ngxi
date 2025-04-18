import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLockDuotoneIcon],svg[lets-icons-lock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M4 12c0-.943 0-1.414.293-1.707S5.057 10 6 10h12c.943 0 1.414 0 1.707.293S20 11.057 20 12v6.038c0 .38 0 .571-.029.74a2 2 0 0 1-1.164 1.49c-.156.07-.341.116-.71.208c-1.238.31-1.857.464-2.476.578c-2.394.44-4.848.44-7.243 0c-.618-.114-1.237-.269-2.474-.578c-.37-.092-.555-.139-.71-.207a2 2 0 0 1-1.165-1.492C4 18.61 4 18.42 4 18.037z"></svg:path><svg:path stroke="currentColor" d="M16.5 10V9a4.5 4.5 0 0 0-9 0v1"></svg:path><svg:circle cx="12" cy="15" r="2" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M12 16v2.5"></svg:path></svg:g>`,
})
export class LetsIconsLockDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
