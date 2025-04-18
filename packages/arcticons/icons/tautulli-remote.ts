import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTautulliRemoteIcon],svg[arcticons-tautulli-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="38.264" cy="38.264" r="4.236" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.264" cy="9.736" r="4.236" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="9.736" cy="19.702" r="4.236" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="9.736" cy="38.264" r="4.236" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.052 32.783c-1.495 1.62-3.986 1.744-5.73.374l-.374-.374c0 .124-.125.124-.125.249c-1.495 1.744-1.246 4.485.623 5.98c1.744 1.495 4.485 1.246 5.98-.623c1.246-1.62 1.121-4.111-.374-5.606"></svg:path><svg:circle cx="24.062" cy="29.918" r="4.236" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.476 22.941l7.475 8.347m15.946-18.064L26.678 26.18m-6.353 5.731l-6.603 4.111m14.825.623l5.482.623"></svg:path>`,
})
export class ArcticonsTautulliRemoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
