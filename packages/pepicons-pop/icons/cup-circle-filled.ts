import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCupCircleFilledIcon],svg[pepicons-pop-cup-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCupCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M18.5 7h-12a1 1 0 0 0-1 1c0 4.918 3.061 9 7 9s7-4.082 7-9a1 1 0 0 0-1-1m-6 8c-2.455 0-4.596-2.57-4.949-6h9.898c-.353 3.43-2.494 6-4.949 6" clip-rule="evenodd"></svg:path><svg:path d="M7 17.5h11a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2m10.024-3.69l.552-1.923c.257.074.539.113.831.113c1.107 0 1.893-.543 1.893-1s-.786-1-1.893-1V8c2.088 0 3.893 1.248 3.893 3s-1.805 3-3.893 3c-.477 0-.945-.065-1.383-.19"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCupCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCupCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
