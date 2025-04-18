import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTextSquareIcon],svg[streamline-text-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.5.5h-11a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"></svg:path><svg:path d="M3.846 10.78L6.17 3.808A.875.875 0 0 1 7 3.21v0c.377 0 .711.241.83.598l2.324 6.972M4.687 8.257h4.626"></svg:path></svg:g>`,
})
export class StreamlineTextSquareIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
