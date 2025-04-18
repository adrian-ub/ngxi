import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDrawingDocumentFilledIcon],svg[ix-drawing-document-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M85.333 42.664H320l106.667 106.667v320H85.333zm36.144 338.686l-14.811 66.647l66.648-14.811c17.602-3.911 30.845-18.466 33.082-36.359l.132-1.062c3.452-27.61-20.02-51.081-47.629-47.631l-1.064.134c-17.892 2.236-32.447 15.48-36.358 33.082m70.522-61.353l42.668 42.667L352 245.331c11.782-11.783 11.782-30.885 0-42.667s-30.884-11.782-42.667 0z" clip-rule="evenodd"></svg:path>`,
})
export class IxDrawingDocumentFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
