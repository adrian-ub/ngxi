import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCloudDownloadIcon],svg[lucide-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 13v8l-4-4m4 4l4-4"></svg:path><svg:path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"></svg:path></svg:g>`
})
export class LucideCloudDownloadIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
