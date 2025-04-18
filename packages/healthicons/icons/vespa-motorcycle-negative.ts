import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsVespaMotorcycleNegativeIcon],svg[healthicons-vespa-motorcycle-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsVespaMotorcycleNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16.95 33a2.5 2.5 0 0 1-4.9 0zm-7.928 0H4.47c-.26 0-.47-.18-.47-.4C4 27.85 8.516 24 14.086 24h8.07c.466 0 .844.322.844.72V26h6.875l.93-7.437c.502.278 1.08.437 1.695.437H35v8.759A5.5 5.5 0 0 1 37.933 27H38a5.5 5.5 0 1 1-5.475 6.032l-.02-.021l-.01-.011H21v-.002l-.111.002h-.911a5.5 5.5 0 0 1-10.956 0M38 35a2.5 2.5 0 0 0 2.456-2.971l-4.925.868A2.5 2.5 0 0 0 38 35M9 21a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1H9zm23.5-11c-1.286 0-2.41.694-3.018 1.727L25.346 11L25 12.97l4.004.704A3.5 3.5 0 0 0 32.5 17h3.885c.34 0 .615-.276.615-.615v-5.77a.615.615 0 0 0-.615-.615z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsVespaMotorcycleNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsVespaMotorcycleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
