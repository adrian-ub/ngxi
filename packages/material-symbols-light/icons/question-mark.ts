import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightQuestionMarkIcon],svg[material-symbols-light-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.33 15.539q0-1.372.421-2.288q.42-.916 1.73-2.062q.91-.824 1.37-1.563t.46-1.666q0-1.333-.918-2.22q-.918-.886-2.509-.886q-1.294 0-2.062.602T8.587 6.954L7.51 6.45q.641-1.273 1.714-2.016q1.073-.742 2.66-.742q2.22 0 3.422 1.27t1.2 2.974q0 1.097-.479 2.003q-.48.907-1.4 1.724q-1.378 1.214-1.737 1.98q-.358.766-.358 1.895zM11.886 21q-.402 0-.701-.299q-.3-.299-.3-.701t.3-.701t.7-.299t.702.299t.299.701t-.3.701t-.7.299"></svg:path>`,
})
export class MaterialSymbolsLightQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
