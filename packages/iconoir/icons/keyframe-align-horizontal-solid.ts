import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeAlignHorizontalSolidIcon],svg[iconoir-keyframe-align-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-width="1.5"><svg:path d="M10.963 6.073a1.35 1.35 0 0 1 2.074 0l4.22 5.062a1.35 1.35 0 0 1 0 1.729l-4.22 5.063a1.35 1.35 0 0 1-2.074 0l-4.22-5.063a1.35 1.35 0 0 1 .001-1.729z"></svg:path><svg:path fill-rule="evenodd" d="M1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirKeyframeAlignHorizontalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
