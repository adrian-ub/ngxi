import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideHandPlatterIcon],svg[lucide-hand-platter-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3V2m3.4 15.4l3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"></svg:path><svg:path d="M2 14h12a2 2 0 0 1 0 4h-2m-8-8h16M5 10a7 7 0 0 1 14 0"></svg:path><svg:path d="M5 14v6a1 1 0 0 1-1 1H2"></svg:path></svg:g>`,
})
export class LucideHandPlatterIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
