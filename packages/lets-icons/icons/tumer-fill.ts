import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTumerFillIcon],svg[lets-icons-tumer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M21 14a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-9 5a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0 2a7 7 0 1 0 0-14a7 7 0 0 0 0 14m1-10a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.5 7.5L19 6m-8.932-3.63c.114-.106.365-.2.715-.267A6.7 6.7 0 0 1 12 2c.44 0 .868.036 1.217.103s.6.161.715.268"></svg:path></svg:g>`,
})
export class LetsIconsTumerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
