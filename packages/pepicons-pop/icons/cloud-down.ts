import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCloudDownIcon],svg[pepicons-pop-cloud-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 3h-1a4 4 0 0 0-3.874 3H6a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4 4 0 0 0 11 3M7.676 8l.387-1.501A2 2 0 0 1 10 5h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 14 12H6a2 2 0 1 1 0-4z" clip-rule="evenodd"></svg:path><svg:path d="M9.5 10a1 1 0 1 1 2 0v7.5a1 1 0 1 1-2 0z"></svg:path><svg:path d="M12.375 14.72a1 1 0 1 1 1.25 1.56l-2.5 2a1 1 0 0 1-1.25-1.56z"></svg:path><svg:path d="M7.375 16.28a1 1 0 1 1 1.25-1.56l2.5 2a1 1 0 0 1-1.25 1.56z"></svg:path></svg:g>`,
})
export class PepiconsPopCloudDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
