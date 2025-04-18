import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiVolumeFillIcon],svg[gravity-ui-volume-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiVolumeFill0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 11h3l2.586 2.586a1.414 1.414 0 0 0 2.414-1V3.414a1.414 1.414 0 0 0-2.414-1L4.5 5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11m12.662 2.103c-.265.319-.743.317-1.036.024c-.292-.293-.288-.766-.031-1.09A6.47 6.47 0 0 0 14.5 8a6.47 6.47 0 0 0-1.405-4.036c-.257-.325-.261-.797.032-1.09c.292-.293.77-.295 1.035.024A7.97 7.97 0 0 1 16 8c0 1.94-.69 3.718-1.838 5.103m-2.138-2.135c-.246.333-.726.33-1.019.037c-.293-.292-.284-.764-.06-1.112A3.5 3.5 0 0 0 11.5 8c0-.697-.204-1.346-.555-1.892c-.224-.348-.233-.82.06-1.113s.773-.296 1.02.038C12.638 5.863 13 6.889 13 8a4.98 4.98 0 0 1-.976 2.968" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiVolumeFill0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiVolumeFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
