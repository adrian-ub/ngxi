import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSoftwareIcon],svg[hugeicons-software-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 10a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path d="M18.245 15a8 8 0 1 0-12.49 0M3 18.5c0-1.404 0-2.107.303-2.611c.132-.218.3-.406.497-.552C4.254 15 4.886 15 6.15 15h11.7c1.264 0 1.896 0 2.35.337c.197.146.365.334.497.552c.303.504.303 1.207.303 2.611s0 2.107-.303 2.611c-.132.218-.3.406-.497.552c-.454.337-1.086.337-2.35.337H6.15c-1.264 0-1.896 0-2.35-.337a1.9 1.9 0 0 1-.497-.552C3 20.607 3 19.904 3 18.5m8-.5h2m2.89-11.39l2.012-2.01"></svg:path></svg:g>`,
})
export class HugeiconsSoftwareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
