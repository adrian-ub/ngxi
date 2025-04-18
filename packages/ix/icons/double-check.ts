import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDoubleCheckIcon],svg[ix-double-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m73.36 235.2l88.709 84.31l22.599-32.158l31.283 29.719l-47.382 67.428L43.973 266.133zm362.518-92.8l34.91 24.531l-152.886 217.567l-124.596-118.366l29.387-30.933l88.71 84.31zm-149.333 0l34.91 24.531l-55.915 79.57l-31.269-29.726z"></svg:path>`,
})
export class IxDoubleCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
