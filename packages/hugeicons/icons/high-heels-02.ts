import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHighHeels02Icon],svg[hugeicons-high-heels-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.94 20c-.24-.44-.394-1.227-.165-2.017c.297-1.028.442-1.321-.492-1.868l-1.389-.814c-.878-.515-1.062-.363-1.704.414c-.783.949-2.18 2.04-4.19 2.513M2 7V5.2C2 4.207 2.173 4 3 4h5c.908 0 1 .555 1 1.5S8.908 7 8 7zm0 0v5"></svg:path><svg:path d="M2 12h1c2.454 0 3.68 0 4.736.528S9.528 14.038 11 16c2.975 3.967 6.473 4 11 4"></svg:path><svg:path d="m2 12l1.47 7.837a.2.2 0 0 0 .196.163H4.3c.11 0 .2-.086.203-.196C4.53 18.757 4.77 13.838 7 12.5"></svg:path></svg:g>`,
})
export class HugeiconsHighHeels02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
