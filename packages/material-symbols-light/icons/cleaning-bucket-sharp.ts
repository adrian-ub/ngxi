import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCleaningBucketSharpIcon],svg[material-symbols-light-cleaning-bucket-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.885 22L6.154 9h11.712l-1.731 13zm4.113-6.5q1.04 0 1.771-.73q.731-.728.731-1.77v-1.5h-1V13q0 .617-.441 1.059q-.442.441-1.059.441t-1.059-.441T10.5 13v-1.5h-1V13q0 1.042.729 1.77q.728.73 1.769.73m3.004-8.52q-.415 0-.709-.29T14 5.983t.291-.709t.707-.293t.709.29t.293.708t-.291.709t-.707.293M10 5.98q-.82 0-1.41-.59T8 3.97t.59-1.41t1.42-.58t1.41.58t.58 1.42q0 .819-.58 1.41q-.58.59-1.42.59"></svg:path>`,
})
export class MaterialSymbolsLightCleaningBucketSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
