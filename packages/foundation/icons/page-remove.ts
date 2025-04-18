import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationPageRemoveIcon],svg[foundation-page-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M75.412 70.658v-.033h-.003a1.73 1.73 0 0 0-1.727-1.696h-6.49c-.944 0-1.708.757-1.727 1.696h-.01v12.668H24.814V36.16h17.723a1.73 1.73 0 0 0 1.73-1.73V16.707h21.188v30.2h.013a1.727 1.727 0 0 0 1.724 1.668h6.49c.935 0 1.69-.742 1.724-1.668h.006V12.501h-.005V8.48a1.73 1.73 0 0 0-1.73-1.73h-32.87L14.857 32.7v58.819c0 .956.774 1.73 1.73 1.73h57.089a1.73 1.73 0 0 0 1.73-1.73v-2.448h.005V70.658z"></svg:path><svg:path fill="currentColor" d="M83.413 53.562h-25.95a1.73 1.73 0 0 0-1.73 1.73v6.92c0 .955.774 1.73 1.73 1.73h25.95a1.73 1.73 0 0 0 1.73-1.73v-6.92a1.73 1.73 0 0 0-1.73-1.73"></svg:path>`,
})
export class FoundationPageRemoveIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
