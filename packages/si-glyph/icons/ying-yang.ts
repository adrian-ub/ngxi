import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphYingYangIcon],svg[si-glyph-ying-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" transform="translate(1)"><svg:path d="M7.984.053C3.599.053.045 3.614.045 8.006s3.555 7.953 7.939 7.953s7.939-3.561 7.939-7.953S12.369.053 7.984.053M7.49 2.045c.838 0 1.519.654 1.519 1.46s-.681 1.46-1.519 1.46c-.84 0-1.519-.654-1.519-1.46s.679-1.46 1.519-1.46m.545 12.863c-3.051 0-5.693-3.99.066-6.924c5.256-2.676 2.803-7.24-.066-6.976c4.375 0 6.939 3.111 6.939 6.95c.001 3.839-3.107 6.95-6.939 6.95"></svg:path><svg:ellipse cx="8.493" cy="11.445" rx="1.493" ry="1.445"></svg:ellipse></svg:g>`,
})
export class SiGlyphYingYangIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
