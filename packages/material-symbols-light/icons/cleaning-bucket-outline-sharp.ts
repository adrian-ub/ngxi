import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCleaningBucketOutlineSharpIcon],svg[material-symbols-light-cleaning-bucket-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.885 22L6.154 9h11.712l-1.731 13zm1.404-1h5.422q.231 0 .404-.154t.212-.384L16.7 10H7.275l1.398 10.462q.039.23.212.384t.403.154M12 15.5q1.039 0 1.77-.73T14.5 13v-1.5h-1V13q0 .617-.441 1.059q-.442.441-1.059.441t-1.059-.441T10.5 13v-1.5h-1V13q0 1.039.73 1.77t1.77.73m3-8.52q-.413 0-.707-.292T14 5.98t.293-.707T15 4.98t.707.293t.293.707t-.293.707T15 6.98m-5-1q-.82 0-1.41-.59T8 3.98q0-.839.59-1.42q.59-.58 1.41-.58q.839 0 1.42.58T12 3.98q0 .819-.58 1.41q-.581.59-1.42.59M14.712 21h-6h6.577z"></svg:path>`,
})
export class MaterialSymbolsLightCleaningBucketOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
