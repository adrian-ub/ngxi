import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLockKeyIcon],svg[hugeicons-lock-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 10.997c-.392-.8-1.452-1.976-3.63-1.926c0 0-1.727-.075-3.68-.075c-1.952 0-2.866.046-4.43.075c-1.001-.025-2.904.2-3.78 2.276c-.576 1.75-.6 5.427-.25 7.277c.075.95.576 2.276 2.128 2.976c.95.5 2.478.3 3.63.4M5.984 8.196c-.05-2.375-.15-4.25 2.603-5.801c.926-.375 2.303-.7 4.005.1c1.777 1.075 1.999 2.213 2.153 2.5c.425 1.126.2 2.726.25 3.376"></svg:path><svg:path d="M15.5 19.735a2.23 2.23 0 0 1-2.245 2.23c-1.236 0-2.255-.986-2.255-2.23a2.253 2.253 0 0 1 2.255-2.244c1.236 0 2.245 1 2.245 2.244m-.275-1.945l1.99-1.942m4.785 0l-1.627-1.54c-.773-.74-1.423-.094-1.747.182l-1.41 1.358m0 0l1.609 1.545"></svg:path></svg:g>`,
})
export class HugeiconsLockKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
