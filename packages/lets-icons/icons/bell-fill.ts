import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBellFillIcon],svg[lets-icons-bell-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M6.502 6.975a5.525 5.525 0 0 1 10.996 0l.286 2.866c.018.175.026.262.037.348a8 8 0 0 0 1.19 3.325l.192.291l.861 1.292c.787 1.18 1.18 1.769 1.008 2.244q-.05.136-.135.252c-.3.407-1.009.407-2.426.407H5.489c-1.417 0-2.126 0-2.426-.407a1 1 0 0 1-.134-.252c-.173-.475.22-1.065 1.006-2.244l.862-1.292l.192-.291a8 8 0 0 0 1.19-3.325c.01-.086.02-.173.037-.348z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10.068 20.63c.114.106.365.2.715.267c.349.067.777.103 1.217.103s.868-.036 1.217-.103s.6-.161.715-.268"></svg:path></svg:g>`,
})
export class LetsIconsBellFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
