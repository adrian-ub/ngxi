import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsBellSlashIcon],svg[heroicons-bell-slash-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.143 17.082a24 24 0 0 0 3.844.148m-3.844-.148a24 24 0 0 1-5.455-1.31a8.96 8.96 0 0 0 2.3-5.542m3.155 6.852Q9.002 17.518 9 18a3 3 0 0 0 5.81 1.053m1.965-2.278L21 21m-4.225-4.225a24 24 0 0 0 3.536-1.003A8.97 8.97 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"></svg:path>`,
})
export class HeroiconsBellSlashIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
