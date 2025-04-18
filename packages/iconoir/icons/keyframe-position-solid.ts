import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframePositionSolidIcon],svg[iconoir-keyframe-position-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-width="1.5"><svg:path fill-rule="evenodd" d="M12 16.25a.75.75 0 0 1 .75.75v2.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h8.25V17a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path d="M10.963 3.073a1.35 1.35 0 0 1 2.074 0l4.22 5.062a1.35 1.35 0 0 1 0 1.729l-4.22 5.063a1.35 1.35 0 0 1-2.074 0l-4.22-5.063a1.35 1.35 0 0 1 .001-1.729z"></svg:path></svg:g>`,
})
export class IconoirKeyframePositionSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
