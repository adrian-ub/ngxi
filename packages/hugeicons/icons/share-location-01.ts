import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShareLocation01Icon],svg[hugeicons-share-location-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2c5.524 0 10 4.478 10 10s-4.476 10-10 10m-3-.5a11 11 0 0 1-3.277-1.754m0-15.492A11.3 11.3 0 0 1 9 2.5m-7 7.746a9.6 9.6 0 0 1 1.296-3.305M2 13.754a9.6 9.6 0 0 0 1.296 3.305"></svg:path><svg:path d="M12.719 16.215a1.044 1.044 0 0 1-1.437 0c-1.765-1.683-4.13-3.564-2.977-6.294C8.929 8.445 10.425 7.5 12 7.5s3.072.945 3.695 2.42c1.152 2.728-1.207 4.618-2.976 6.295m-.723-4.715h.006"></svg:path></svg:g>`,
})
export class HugeiconsShareLocation01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
