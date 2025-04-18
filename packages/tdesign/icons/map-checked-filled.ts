import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMapCheckedFilledIcon],svg[tdesign-map-checked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2.717L1 5.926V21.5l5.5-2.267zm2 16.193l5 2.953v-.173a6.48 6.48 0 0 1-2-4.69a6.48 6.48 0 0 1 2-4.69V5.09l-5-2.952zM21 2.5v8.732a6.5 6.5 0 0 0-3-.732a6.5 6.5 0 0 0-2.5.498v-6.23z"></svg:path><svg:path fill="currentColor" d="m16.586 21.657l7.072-7.07l-1.415-1.415l-5.657 5.657L13.758 16l-1.414 1.415z"></svg:path>`,
})
export class TdesignMapCheckedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
