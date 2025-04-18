import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDirectionLeft02Icon],svg[hugeicons-direction-left-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.06 5.68c.626-.827.939-1.24 1.367-1.46S9.343 4 10.32 4H16c.943 0 1.414 0 1.707.293S18 5.057 18 6v3c0 .943 0 1.414-.293 1.707S16.943 11 16 11h-5.679c-.978 0-1.466 0-1.894-.22s-.741-.633-1.367-1.46l-.248-.326C6.271 8.28 6 7.922 6 7.5s.27-.78.812-1.494z"></svg:path><svg:path d="M7.06 5.68c.626-.827.939-1.24 1.367-1.46S9.343 4 10.32 4H16c.943 0 1.414 0 1.707.293S18 5.057 18 6v3c0 .943 0 1.414-.293 1.707S16.943 11 16 11h-5.679c-.978 0-1.466 0-1.894-.22s-.741-.633-1.367-1.46l-.248-.326C6.271 8.28 6 7.922 6 7.5s.27-.78.812-1.494zM14 21V11m0-7V3m-4 18h8"></svg:path></svg:g>`,
})
export class HugeiconsDirectionLeft02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
