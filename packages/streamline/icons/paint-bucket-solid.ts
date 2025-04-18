import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePaintBucketSolidIcon],svg[streamline-paint-bucket-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.85 5.861c.22.22.194.585-.055.771l-6.9 5.17a1.02 1.02 0 0 1-1.318-.092L.295 8.425a1.02 1.02 0 0 1-.092-1.33L5.37.206A.51.51 0 0 1 6.14.15zm.101 4.437c-.464.697-.951 1.596-.951 2.217C11 13.63 11.75 14 12.5 14s1.5-.371 1.5-1.485c0-.621-.487-1.52-.951-2.217a.654.654 0 0 0-1.098 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePaintBucketSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
