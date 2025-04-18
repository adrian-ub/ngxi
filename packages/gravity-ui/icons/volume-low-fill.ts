import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeLowFillIcon],svg[gravity-ui-volume-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 11h3l2.586 2.586a1.414 1.414 0 0 0 2.414-1V3.414a1.414 1.414 0 0 0-2.414-1L4.5 5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11m10.525-.032c-.247.333-.727.33-1.02.037c-.293-.292-.284-.764-.06-1.112A3.5 3.5 0 0 0 11.5 8c0-.697-.204-1.346-.555-1.892c-.224-.348-.233-.82.06-1.113s.773-.296 1.02.038C12.638 5.863 13 6.889 13 8a4.98 4.98 0 0 1-.975 2.968" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiVolumeLowFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
