import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBorobudurIcon],svg[hugeicons-borobudur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 9l.262-1.374C8.519 6.273 8.85 6 10.226 6h3.548c1.376 0 1.707.273 1.964 1.626L16 9m1.838 10H6.162c-1.307 0-1.96 0-2.496.273C2.626 19.803 2.344 20.969 2 22h20c-.344-1.03-.627-2.197-1.666-2.727C19.799 19 19.145 19 17.838 19M9 12.5v1m6-1v1M12 15v1M10 6l.81-3.243c.158-.63.321-.757.97-.757h.44c.649 0 .812.127.97.757L14 6"></svg:path><svg:path d="M4 19c.58-.774.936-2.148 1.148-3.656c.455-3.248.683-4.871 1.53-5.608C7.523 9 8.928 9 11.74 9h.518c2.812 0 4.217 0 5.064.736c.846.736 1.074 2.36 1.53 5.608c.21 1.508.566 2.882 1.147 3.656"></svg:path></svg:g>`,
})
export class HugeiconsBorobudurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
