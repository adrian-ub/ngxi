import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsEyeIcon],svg[lineicons-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.023 7.625a4.375 4.375 0 1 0 0 8.75a4.375 4.375 0 0 0 0-8.75M9.148 12a2.875 2.875 0 1 1 5.75 0a2.875 2.875 0 0 1-5.75 0"></svg:path><svg:path d="M12.023 4.5c-4.312 0-8.025 2.556-9.722 6.235a3.02 3.02 0 0 0 0 2.53c1.697 3.679 5.41 6.235 9.722 6.235s8.026-2.556 9.723-6.235c.37-.802.37-1.728 0-2.53c-1.697-3.679-5.41-6.235-9.723-6.235m-8.36 6.863C5.125 8.194 8.32 6 12.023 6c3.704 0 6.899 2.194 8.36 5.363c.187.404.187.87 0 1.274C18.923 15.806 15.728 18 12.024 18s-6.898-2.194-8.36-5.363a1.52 1.52 0 0 1 0-1.274"></svg:path></svg:g>`,
})
export class LineiconsEyeIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
