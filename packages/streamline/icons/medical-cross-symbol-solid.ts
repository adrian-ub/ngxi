import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMedicalCrossSymbolSolidIcon],svg[streamline-medical-cross-symbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.047.757a.5.5 0 0 1 .5-.5h2.906a.5.5 0 0 1 .5.5v2.86l2.478-1.43a.5.5 0 0 1 .683.183l1.452 2.517a.5.5 0 0 1-.183.683L10.906 7l2.477 1.43a.5.5 0 0 1 .183.684l-1.453 2.516a.5.5 0 0 1-.683.183l-2.477-1.43v2.86a.5.5 0 0 1-.5.5H5.547a.5.5 0 0 1-.5-.5v-2.86l-2.477 1.43a.5.5 0 0 1-.683-.183L.434 9.114a.5.5 0 0 1 .183-.683L3.095 7L.617 5.57a.5.5 0 0 1-.183-.683L1.887 2.37a.5.5 0 0 1 .683-.183l2.477 1.43V.758Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMedicalCrossSymbolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
