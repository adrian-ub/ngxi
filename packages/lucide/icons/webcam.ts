import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideWebcamIcon],svg[lucide-webcam-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="10" r="8"></svg:circle><svg:circle cx="12" cy="10" r="3"></svg:circle><svg:path d="M7 22h10m-5 0v-4"></svg:path></svg:g>`,
})
export class LucideWebcamIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
