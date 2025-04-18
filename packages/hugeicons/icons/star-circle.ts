import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStarCircleIcon],svg[hugeicons-star-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path><svg:path d="m12.864 7.722l.88 1.774c.12.247.44.484.71.53l1.595.267c1.02.171 1.26.917.524 1.653l-1.24 1.25c-.21.212-.324.62-.26.913l.355 1.547c.28 1.225-.364 1.699-1.44 1.059l-1.494-.892c-.27-.162-.715-.162-.99 0l-1.495.892c-1.07.64-1.72.161-1.44-1.059l.355-1.547c.065-.293-.05-.7-.26-.913l-1.24-1.25c-.73-.736-.495-1.482.525-1.653l1.595-.267a1.1 1.1 0 0 0 .705-.53l.88-1.774c.48-.963 1.26-.963 1.735 0"></svg:path></svg:g>`,
})
export class HugeiconsStarCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
