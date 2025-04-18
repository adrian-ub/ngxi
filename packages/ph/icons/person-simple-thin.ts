import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleThinIcon],svg[ph-person-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M227.43 130.06a4 4 0 0 1-5.49 1.37c-.38-.23-37.87-22.29-89.94-23.38v42.43l63 70.86a4 4 0 0 1-6 5.32L128 158l-61 68.66a4 4 0 0 1-6-5.32l63-70.86v-42.43c-52.07 1.09-89.56 23.15-89.94 23.38a4 4 0 0 1-4.12-6.86c1.67-1 41.6-24.57 98.06-24.57s96.39 23.57 98.06 24.57a4 4 0 0 1 1.37 5.49M100 48a28 28 0 1 1 28 28a28 28 0 0 1-28-28m8 0a20 20 0 1 0 20-20a20 20 0 0 0-20 20"></svg:path>`,
})
export class PhPersonSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
