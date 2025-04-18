import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUsbCircleLinearIcon],svg[solar-usb-circle-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="17" r="1" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:circle cx="8" cy="9" r="1" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M11.25 16a.75.75 0 0 0 1.5 0zM12 6l.53-.53a.75.75 0 0 0-1.06 0zm.47 1.53a.75.75 0 1 0 1.06-1.06zm-2-1.06a.75.75 0 0 0 1.06 1.06zm1 .06l1 1l1.06-1.06l-1-1zm0-1.06l-1 1l1.06 1.06l1-1zM12.75 16v-1.875h-1.5V16zm0-1.875V6h-1.5v8.125z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8 10v1.03a2 2 0 0 0 1.403 1.909l1.404.438A1.7 1.7 0 0 1 12 15m4-4v1.03a2 2 0 0 1-1.403 1.909l-1.404.438A1.7 1.7 0 0 0 12 16"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M15 10c0-.471 0-.707.146-.854C15.293 9 15.53 9 16 9s.707 0 .854.146C17 9.293 17 9.53 17 10s0 .707-.146.854C16.707 11 16.47 11 16 11s-.707 0-.854-.146C15 10.707 15 10.47 15 10Z"></svg:path><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></svg:circle></svg:g>`,
})
export class SolarUsbCircleLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
