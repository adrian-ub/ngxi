import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phOnigiriBoldIcon],svg[ph-onigiri-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235 144.51l-55.87-95.86a3 3 0 0 0-.17-.29a60 60 0 0 0-101.96 0a3 3 0 0 0-.17.29L21 144.51A60 60 0 0 0 72.1 236h111.8a60 60 0 0 0 51.1-91.49M156 212h-56v-40h56Zm59.36-18.5A35.55 35.55 0 0 1 183.9 212H180v-44a20 20 0 0 0-20-20H96a20 20 0 0 0-20 20v44h-3.9a36 36 0 0 1-30.58-55l.17-.28l55.82-95.84a36 36 0 0 1 61 0l55.82 95.85l.17.28a35.58 35.58 0 0 1 .85 36.49Z"></svg:path>`,
})
export class PhOnigiriBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
