import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconCloudrunIcon],svg[devicon-cloudrun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#aecbfa" d="M128 63.965L38.957 0l22.26 63.966Z"></svg:path><svg:path fill="#4285f4" d="M38.957 128L128 63.965H61.217zM16.696 63.965L0 128l22.332-10.718l16.625-53.317Z"></svg:path><svg:path fill="#aecbfa" d="M22.332 10.649L0-.001l16.696 63.966h22.26Z"></svg:path>`,
})
export class DeviconCloudrunIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
