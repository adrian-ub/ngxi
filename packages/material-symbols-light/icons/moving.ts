import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMovingIcon],svg[material-symbols-light-moving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.304 17.308l-.708-.708l4.954-4.954q.74-.721 1.77-.73q1.028-.01 1.769.73l1.15 1.15q.453.454 1.068.445q.614-.01 1.068-.445L19.691 7.5h-3.287v-1h5v5h-1V8.214l-5.321 5.296q-.74.72-1.78.73q-1.038.01-1.759-.711l-1.175-1.175q-.448-.448-1.056-.438q-.607.009-1.055.438z"></svg:path>`,
})
export class MaterialSymbolsLightMovingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
