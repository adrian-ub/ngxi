import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGateControlStationIcon],svg[arcticons-gate-control-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="12" height="16" x="17.744" y="15.852" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.101" ry="1.101" transform="rotate(30 23.744 23.852)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.181 28.284l-5.298-3.06m-10.49-6.056L14.7 16.459m18.726 14.865l-5.299-3.059m-10.49-6.056l-4.693-2.71M31.67 34.365l-5.298-3.059m-10.49-6.057l-4.693-2.709m25.748 2.703l-5.299-3.059m-10.49-6.057l-4.693-2.709m19.954 1.371h-7.091l-3.545-6.141H11.591L4.5 20.93l7.091 12.281h7.091l3.545 6.141h14.182L43.5 27.07z"></svg:path>`,
})
export class ArcticonsGateControlStationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
