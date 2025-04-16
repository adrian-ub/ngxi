import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCloudCogIcon],svg[lucide-cloud-cog-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="17" r="3"></svg:circle><svg:path d="M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2m-4.3 2.2l-.9-.3m-5.6-2.2l-.9-.3m2.3 5.1l.3-.9m2.2-5.6l.3-.9m.2 7.4l-.4-1m-2.4-5.4l-.4-1m-2.1 5.3l1-.4m5.4-2.4l1-.4"></svg:path></svg:g>`,
})
export class LucideCloudCogIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
