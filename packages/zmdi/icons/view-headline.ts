import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiViewHeadlineIcon],svg[zmdi-view-headline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256v-43h341v43zm0 85v-42h341v42zm0-170v-43h341v43zM0 43h341v42H0z"></svg:path>`,
})
export class ZmdiViewHeadlineIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
