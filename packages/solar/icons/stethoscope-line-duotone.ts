import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStethoscopeLineDuotoneIcon],svg[solar-stethoscope-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 14.235V17a5 5 0 0 0 5 5h.882a4.12 4.12 0 0 0 3.964-3" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M5.429 3h-.092c-.313 0-.47 0-.601.012a3 3 0 0 0-2.724 2.724C2 5.868 2 6.024 2 6.336v.9a7 7 0 0 0 7 7a6.714 6.714 0 0 0 6.714-6.715V6.337c0-.313 0-.47-.011-.601a3 3 0 0 0-2.724-2.724C12.847 3 12.69 3 12.377 3h-.091"></svg:path><svg:circle cx="19" cy="16" r="3"></svg:circle><svg:path stroke-linecap="round" d="M12 2v2M6 2v2"></svg:path></svg:g>`,
})
export class SolarStethoscopeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
