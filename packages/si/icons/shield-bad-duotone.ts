import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siShieldBadDuotoneIcon],svg[si-shield-bad-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M12.113 21.98a.33.33 0 0 1-.226 0C10.917 21.64 4 18.94 4 11.252V4.304a.4.4 0 0 1 .303-.389l7.6-1.903a.4.4 0 0 1 .194 0l7.6 1.903a.4.4 0 0 1 .303.389v6.948c0 7.765-6.916 10.397-7.887 10.729"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M9.172 13.828L12 11m0 0l2.828-2.828M12 11l2.828 2.828M12 11L9.172 8.172M4 11.252c0 7.687 6.918 10.387 7.887 10.728q.113.04.226 0C13.084 21.65 20 19.018 20 11.253V4.304a.4.4 0 0 0-.303-.389l-7.6-1.903a.4.4 0 0 0-.194 0l-7.6 1.903A.4.4 0 0 0 4 4.304z"></svg:path></svg:g>`,
})
export class SiShieldBadDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
