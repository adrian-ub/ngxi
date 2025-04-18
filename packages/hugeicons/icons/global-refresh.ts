import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGlobalRefreshIcon],svg[hugeicons-global-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m19.742 17.492l.85.45c.595.315.893.473 1.17.291s.255-.467.213-1.037c-.245-3.276-4.302-5.523-7.108-3.312m.389 3.607l-.85-.45c-.595-.315-.893-.473-1.17-.29s-.254.468-.209 1.036c.26 3.249 4.293 5.526 7.03 3.364"></svg:path><svg:path d="M11.01 22C5.952 21.497 2 17.223 2 12.025C2 6.488 6.482 2 12.012 2c5.296 0 9.632 4.118 9.988 9.33"></svg:path><svg:path d="M20 5.699c-.935.067-2.132.43-2.962 1.504c-1.5 1.94-2.999 2.103-3.999 1.456c-1.5-.97-.239-2.543-1.999-3.397C9.893 4.705 9.733 3.19 10.372 2M2 11c.763.662 1.83 1.268 3.089 1.268c2.6 0 3.12.497 3.12 2.484s0 1.987.52 3.477c.338.97.456 1.938-.218 2.771"></svg:path></svg:g>`,
})
export class HugeiconsGlobalRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
