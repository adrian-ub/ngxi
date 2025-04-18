import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSkull1Icon],svg[streamline-skull-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.884 6.511a5.885 5.885 0 1 0-9.316 4.776v1.108a.98.98 0 0 0 .98.98h4.904a.98.98 0 0 0 .98-.98v-1.108a5.88 5.88 0 0 0 2.452-4.776M6.02 11.415v1.96m1.96-1.96v1.96"></svg:path><svg:path d="M3.567 7.246a1.226 1.226 0 1 0 2.452 0a1.226 1.226 0 1 0-2.452 0m4.414 0a1.226 1.226 0 1 0 2.452 0a1.226 1.226 0 1 0-2.452 0"></svg:path></svg:g>`,
})
export class StreamlineSkull1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
