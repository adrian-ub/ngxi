import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignStreetRoadFilledIcon],svg[tdesign-street-road-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zM6.657 13.372l11.715-7.03l-1.03-1.714L9.456 9.36L7.388 5.64l-1.748.971l2.1 3.78l-2.112 1.266zm9.604.238l2.11-1.267l-1.028-1.715l-11.715 7.029l1.029 1.715l7.887-4.733l2.067 3.72l1.749-.97z"></svg:path>`,
})
export class TdesignStreetRoadFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
