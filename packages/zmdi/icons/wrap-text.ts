import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWrapTextIcon],svg[zmdi-wrap-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 341v-42h128v42zM341 43v42H0V43zm-64 128q36 0 61 25t25 60t-25 60t-61 25h-42v43l-64-64l64-64v43h48q17 0 29.5-12.5T325 256t-12.5-30.5T283 213H0v-42z"></svg:path>`,
})
export class ZmdiWrapTextIcon {
  readonly viewBox = input("0 0 368 384")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
