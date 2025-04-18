import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCarParking02Icon],svg[hugeicons-car-parking-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 21V9.61c0-1.322 0-1.984-.344-2.496s-.953-.758-2.17-1.25l-6-2.42C12.752 3.148 12.386 3 12 3s-.752.148-1.486.444l-6 2.42c-1.217.492-1.826.738-2.17 1.25S2 8.288 2 9.61V21m14-2v2m-8-2v2"></svg:path><svg:path d="m7.5 14l.243-.97c.363-1.455.545-2.183 1.088-2.606C9.373 10 10.123 10 11.623 10h.754c1.5 0 2.25 0 2.792.424c.543.423.725 1.15 1.088 2.606l.243.97m.5 0H7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1m-8.5 2.49v.01m7-.01v.01"></svg:path></svg:g>`,
})
export class HugeiconsCarParking02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
