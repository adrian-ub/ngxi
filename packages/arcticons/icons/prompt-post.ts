import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPromptPostIcon],svg[arcticons-prompt-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.044 36.595a4.7 4.7 0 0 1-4.714-4.708V10.208A4.7 4.7 0 0 1 13.044 5.5h21.911a4.7 4.7 0 0 1 4.714 4.708v8.338c0 2.939.115 3.988-1.824 5.925L27.532 34.773c-1.463 1.461-3.863 1.822-5.931 1.822z"></svg:path><svg:path d="M38.553 23.68H25.236v12.413"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.33 42.5h31.34"></svg:path>`,
})
export class ArcticonsPromptPostIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
