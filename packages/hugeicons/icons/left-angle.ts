import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLeftAngleIcon],svg[hugeicons-left-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 5c-.393-.405-1.44-2-2-2s-1.607 1.595-2 2M5 17c-.405.393-2 1.44-2 2s1.595 1.607 2 2m14-9h-1c-2.828 0-4.243 0-5.121.879C12 13.757 12 15.172 12 18v1"></svg:path><svg:path d="M3 19h10c2.828 0 4.243 0 5.121-.852S19 15.925 19 13.182V3"></svg:path></svg:g>`,
})
export class HugeiconsLeftAngleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
