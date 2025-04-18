import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHeartbeatNegativeIcon],svg[healthicons-heartbeat-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsHeartbeatNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm27.92 10.002a1.5 1.5 0 0 0-1.378 1.147l-4.824 20.042l-5.302-15.185a1.5 1.5 0 0 0-2.812-.054l-2.627 6.694H4v3h8a1.5 1.5 0 0 0 1.396-.952l1.522-3.878l5.649 16.179a1.5 1.5 0 0 0 2.874-.144l4.838-20.1l2.817 7.899a1.5 1.5 0 0 0 1.412.996h1.393c1.267.037 2.122.262 3.032.921c.277.332.608.618.978.845L38 27.5v-.035a4 4 0 1 0 0-6.93V20.5l-.088.088a4 4 0 0 0-1.028.904c-.982.736-1.909 1.006-3.37 1.008l-4.101-11.504a1.5 1.5 0 0 0-1.493-.994" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsHeartbeatNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsHeartbeatNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
