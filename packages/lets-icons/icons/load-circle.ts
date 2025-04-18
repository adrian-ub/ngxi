import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsLoadCircleIcon],svg[lets-icons-load-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M5.239 14.812a7 7 0 0 0 13.523 0"></svg:path><svg:path fill="currentColor" d="m12 13l-.625.78l.625.5l.625-.5zm1-9a1 1 0 1 0-2 0zM6.375 9.78l5 4l1.25-1.56l-5-4zm6.25 4l5-4l-1.25-1.56l-5 4zM13 13V4h-2v9z"></svg:path></svg:g>`,
})
export class LetsIconsLoadCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
